import React from 'react';
import styles from '../styles/CourseCard.module.css'; import { StyledButton } from './StyledButton';

export default function CourseCard({ course }) {
const { title, instructor, category, seatsLeft, maxSeats, duration, image } = course;
const isFull = seatsLeft === 0;
const isFillingFast = seatsLeft > 0 && seatsLeft <= 5;

// Dynamic inline styling for availability status badge 
let statusColor = '#16a34a'; // Green for Open
let statusText = `${seatsLeft} seats available`; if (isFull) {
statusColor = '#dc2626'; // Red for Full statusText = 'Class Full - Closed';
} else if (isFillingFast) {
statusColor = '#ea580c'; // Orange for Filling Fast statusText = `Only ${seatsLeft} seats left!`;
}

return (
<div className={styles.card}>
<div className={styles.bannerWrapper}>
<img src={image} alt={title} className={styles.banner} />
<span className={styles.categoryTag}>{category}</span>
</div>
<div className={styles.content}>
<h3 className={styles.title}>{title}</h3>
<p className={styles.instructor}>👨‍🏫 Instructor: {instructor}</p>

<div className={styles.detailsRow}>
<span className={styles.duration}>⏱ {duration}</span>
{/* Dynamic Status Display */}
<span style={{ color: statusColor, fontWeight: 'bold', fontSize: '13px' }}>
{statusText}
</span>
</div>

{/* Styled Component Action Button */}
<StyledButton disabled={isFull}>
{isFull ? 'Registration Closed' : 'Enroll in Workshop'}
</StyledButton>
</div>
</div>
);
}

