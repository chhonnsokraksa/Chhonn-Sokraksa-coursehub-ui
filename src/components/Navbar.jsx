export default function Navbar() { 
  const navStyle = {
    display: 'flex',  justifyContent: 'space-between', alignItems: 'center', backgroundColor: '#ffffff', padding: '16px 32px',
    borderBottom: '1px solid #e2e8f0', boxShadow: '0 1px 3px rgba(0, 0, 0, 0.05)', position: 'sticky',
    top: 0,
    zIndex: 100
    };

return (
  <nav style={navStyle}>
    <div style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
      <span style={{ fontSize: '24px' }}>🎓</span>
      <span style={{ fontSize: '20px', fontWeight: 'bold', color: '#1e3a8a' }}> CourseHub Portal
      </span>
    </div>
    <div style={{ display: 'flex', alignItems: 'center', gap: '16px' }}>
      <span style={{ color: '#64748b', fontSize: '14px' }}>Term: Fall 2026</span>
      <div style={{ backgroundColor: '#eff6ff', color: '#2563eb',
      padding: '6px 14px', borderRadius: '20px', fontWeight: '600', fontSize: '13px'
      }}>
      6 Workshops Active
      </div>
    </div>
  </nav>
);
}

