// app.js

// Function to toggle visibility of content for Army, Navy, and Air Force sections
function toggleContent(branch) {
    // Hide all sections first
    const sections = document.querySelectorAll('section');
    sections.forEach(section => {
        section.classList.add('hidden');
    });

    // Show the selected section
    document.getElementById(branch).classList.remove('hidden');

    // Populate the content dynamically for each section
    if (branch === 'army') {
        const armyContent = `
            <h3>History</h3>
            <p>The Indian Army, established in 1776, has a rich history of bravery and valor. It has participated in numerous battles such as the Indo-Pakistani wars of 1947, 1965, and 1971.</p>
            <h3>Major Battles</h3>
            <ul>
                <li>Indo-Pakistani War of 1947-1948</li>
                <li>Indo-Pakistani War of 1965</li>
                <li>Indo-Pakistani War of 1971</li>
                <li>Kargil War of 1999</li>
            </ul>
            <h3>Achievements</h3>
            <ul>
                <li>Param Vir Chakra Awards</li>
                <li>Victory in the 1971 Bangladesh Liberation War</li>
                <li>Operation Vijay (Kargil War)</li>
            </ul>
        `;
        document.getElementById('army-info').innerHTML = armyContent;
    } else if (branch === 'navy') {
        const navyContent = `
            <h3>History</h3>
            <p>The Indian Navy was established in 1612 and has played a crucial role in defending the country's maritime borders. It has seen active involvement in both World Wars and other regional conflicts.</p>
            <h3>Major Battles</h3>
            <ul>
                <li>Indo-Pakistani War of 1971 (Operation Trident)</li>
                <li>Operation Cactus (Maldives)</li>
            </ul>
            <h3>Achievements</h3>
            <ul>
                <li>Strategic dominance in the Indian Ocean</li>
                <li>Operation Sukoon (Evacuation of Indian Nationals from Lebanon)</li>
            </ul>
        `;
        document.getElementById('navy-info').innerHTML = navyContent;
    } else if (branch === 'airforce') {
        const airforceContent = `
            <h3>History</h3>
            <p>The Indian Air Force (IAF) was formed in 1932 and has since become a leading force in Asia. It played a significant role in conflicts such as the 1965 and 1971 wars, and Kargil War.</p>
            <h3>Major Battles</h3>
            <ul>
                <li>Indo-Pakistani War of 1965</li>
                <li>Indo-Pakistani War of 1971</li>
                <li>Kargil War of 1999</li>
            </ul>
            <h3>Achievements</h3>
            <ul>
                <li>Mirage 2000 bombing of enemy targets in Kargil</li>
                <li>Integral role in air defense and air superiority</li>
                <li>Operation Safed Sagar (Kargil War)</li>
            </ul>
        `;
        document.getElementById('airforce-info').innerHTML = airforceContent;
    }
}
