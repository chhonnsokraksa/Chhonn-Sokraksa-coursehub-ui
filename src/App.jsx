import React,{ useState } from 'react'; 
import Navbar from './components/Navbar'; 
import Sidebar from './components/Sidebar';
import CourseCard from './components/CourseCard';
import './styles/App.css';

export default function App() {
const [selectedCategory, setSelectedCategory] = useState('All Courses');

const courseCatalog = [
{
id: 1,
title: "React & UI Styling Masterclass", instructor: "Ya Yu Eol",
category: "Frontend Web", duration: "3 Weeks",
seatsLeft: 0,
maxSeats: 30,
image: "https://placehold.co/400x200?text=React+UI+Styling"
},
{
id: 2,
title: "Tailwind CSS Rapid Prototyping", instructor: "Sann Sophar",
category: "Frontend Web", duration: "2 Weeks",
seatsLeft: 4,
maxSeats: 25,
image: "https://placehold.co/400x200?text=Tailwind+CSS"
},
{
id: 3,
title: "Python Data Science & Visualization", instructor: "Dr. Kim Dara",
category: "Data Science", duration: "4 Weeks",
seatsLeft: 12,
maxSeats: 25,
image: "https://placehold.co/400x200?text=Data+Science"
},
{
id: 4,
title: "AWS Cloud Fundamentals & Docker", instructor: "Chhean Sokha",
category: "Cloud & DevOps", duration: "3 Weeks",
seatsLeft: 2,
maxSeats: 20,
image: "https://placehold.co/400x200?text=Cloud+DevOps"
},
{
id: 5,
title: "Ethical Hacking & Web Security", instructor: "Heng Vanna",
category: "Cybersecurity", duration: "5 Weeks",
seatsLeft: 8,
maxSeats: 20,
image: "https://placehold.co/400x200?text=Cybersecurity"
},
{
id: 6,
title: "Advanced Styled Components & Design Systems", instructor: "Ya Yu Eol",
category: "Frontend Web", duration: "2 Weeks",
seatsLeft: 15,
maxSeats: 30,
image: "https://placehold.co/400x200?text=Design+Systems"
}
];

// Filter courses based on active sidebar tab
const filteredCourses = selectedCategory === 'All Courses'
? courseCatalog
: courseCatalog.filter(c => c.category === selectedCategory);

return (
<div className="app-container">
<Navbar />
<div className="layout-body">
<Sidebar selectedCategory={selectedCategory} onSelectCategory={setSelectedCategory}
/>
<main className="main-viewport">
<header>
<h1 style={{ fontSize: '26px', color: '#0f172a', fontWeight: '800' }}> Upcoming Tech Workshops
</h1>
<p style={{ color: '#64748b', marginTop: '6px' }}>
Browse verified professional workshops and reserve seats in real time.
</p>
</header>
<div className="courses-grid">
{filteredCourses.map(course => (
<CourseCard key={course.id} course={course} />
))}
</div>
</main>
</div>
</div>
);
}
