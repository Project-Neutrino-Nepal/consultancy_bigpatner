import db from '../../config/database.js';

export const getAllSettings = (req, res) => {
  try {
    const settings = db.prepare('SELECT * FROM settings').all();
    
    const settingsObject = settings.reduce((acc, setting) => {
      acc[setting.key] = setting.value;
      return acc;
    }, {});

    res.json(settingsObject);
  } catch (error) {
    console.error('Get settings error:', error);
    res.status(500).json({ error: 'Failed to fetch settings' });
  }
};

export const updateSettings = (req, res) => {
  try {
    const updates = req.body;

    // Use INSERT OR REPLACE for SQLite compatibility
    const updateStmt = db.prepare(`
      INSERT OR REPLACE INTO settings (key, value, updated_at) 
      VALUES (?, ?, CURRENT_TIMESTAMP)
    `);

    // Update each setting
    Object.entries(updates).forEach(([key, value]) => {
      // Convert value to string, allow empty strings
      const stringValue = value !== null && value !== undefined ? String(value) : '';
      updateStmt.run(key, stringValue);
    });

    // Return updated settings
    const settings = db.prepare('SELECT * FROM settings').all();
    const settingsObject = settings.reduce((acc, setting) => {
      acc[setting.key] = setting.value;
      return acc;
    }, {});

    res.json(settingsObject);
  } catch (error) {
    console.error('Update settings error:', error);
    res.status(500).json({ error: 'Failed to update settings' });
  }
};

export const getDashboardStats = (req, res) => {
  try {
    const stats = {
      countries: db.prepare('SELECT COUNT(*) as count FROM countries WHERE status = ?').get('active').count,
      universities: db.prepare('SELECT COUNT(*) as count FROM universities WHERE status = ?').get('active').count,
      blogs: db.prepare('SELECT COUNT(*) as count FROM blogs WHERE status = ?').get('published').count,
      enquiries: db.prepare('SELECT COUNT(*) as count FROM enquiries').get().count,
      newEnquiries: db.prepare('SELECT COUNT(*) as count FROM enquiries WHERE status = ?').get('new').count
    };

    const recentEnquiries = db.prepare(`
      SELECT e.*, c.name as country_name 
      FROM enquiries e 
      LEFT JOIN countries c ON e.country_id = c.id 
      ORDER BY e.created_at DESC 
      LIMIT 5
    `).all();

    res.json({ stats, recentEnquiries });
  } catch (error) {
    console.error('Get dashboard stats error:', error);
    res.status(500).json({ error: 'Failed to fetch dashboard stats' });
  }
};
