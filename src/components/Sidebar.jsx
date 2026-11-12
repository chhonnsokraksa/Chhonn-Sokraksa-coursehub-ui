import React from 'react';

export default function Sidebar({ selectedCategory, onSelectCategory }) {
const categories = ['All Courses', 'Frontend Web', 'Data Science', 'Cloud & DevOps', 'Cybersecurity'];

const sidebarContainer = { width: '240px', backgroundColor: '#ffffff',
borderRight: '1px solid #e2e8f0', padding: '24px 16px',
display: 'flex', flexDirection: 'column', gap: '8px'
};

return (
<aside style={sidebarContainer} className="sidebar">
<h4 style={{ color: '#94a3b8', fontSize: '12px', textTransform: 'uppercase', marginBottom: '8px', letterSpacing: '0.05em' }}>
Filter Categories
</h4>
{categories.map((cat) => {
const isActive = selectedCategory === cat; return (
<button key={cat}
onClick={() => onSelectCategory(cat)}
style={{
textAlign: 'left', padding: '10px 14px', borderRadius: '8px', border: 'none', cursor: 'pointer', fontSize: '14px',
fontWeight: isActive ? '600' : '400',
backgroundColor: isActive ? '#2563eb' : 'transparent', color: isActive ? '#ffffff' : '#475569',
transition: 'all 0.2s'
}}
>
{cat}
</button>
);
})}
</aside>
);
}

