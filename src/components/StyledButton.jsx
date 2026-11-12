import styled from 'styled-components';

// Demonstrates CSS-in-JS using Styled Components with props 
export const StyledButton = styled.button`
width: 100%; padding: 10px 16px; border: none; border-radius: 6px; font-size: 14px; font-weight: 600;
cursor: ${props => props.disabled ? 'not-allowed' : 'pointer'}; background-color: ${props => {
if (props.disabled) return '#cbd5e1';
if (props.variant === 'secondary') return '#f1f5f9'; return '#2563eb';
}};
color: ${props => {
if (props.disabled) return '#94a3b8';
if (props.variant === 'secondary') return '#1e293b'; return '#ffffff';
}};
transition: background-color 0.2s, transform 0.1s;

&:hover {
background-color: ${props => {
if (props.disabled) return '#cbd5e1';
if (props.variant === 'secondary') return '#e2e8f0'; return '#1d4ed8';
}};
}

&:active {
transform: ${props => props.disabled ? 'none' : 'scale(0.98)'};
}
`;
