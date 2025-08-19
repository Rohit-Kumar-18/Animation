document.addEventListener('DOMContentLoaded', function() {
    fetchData('aircrafts');
    fetchData('warships');
    fetchData('submarines');
    fetchData('defense-systems');

    document.getElementById("army-history-btn").addEventListener("click", function() {
        const armyHistory = `
            <h3>History of the Indian Army</h3>
            <p>The Indian Army has a rich and storied history, marked by significant achievements and numerous battles across centuries. It has evolved from ancient times to one of the most formidable military forces in the world today. Here is a detailed account of the Indian Army's history, achievements, and key battles:</p>
           
           <h4> 1. Indo-Pakistani War of 1947-48 (October 1947 – January 1949)</h4>
<p>Battle of Kashmir: This was the first conflict between India and Pakistan, fought over the princely state of Jammu and Kashmir, which had acceded to India. The war started after tribal militias and Pakistani forces invaded Kashmir. The Indian Army intervened to defend the region.</p>

<p>Key Battles:

Battle of Zojila Pass: A significant battle fought in the Kashmir region, where Indian forces successfully defended the pass from Pakistani attacks.

Battle of Poonch: The Indian Army successfully defended Poonch in Jammu and Kashmir.</p>

<h5>Outcome:</h5> 
<p>The war ended with a UN-brokered ceasefire in January 1949, and the Line of Control (LoC) was established, dividing Kashmir between India and Pakistan. India retained control of the majority of the region</p>
<h4>2. Indo-China War of 1962 (October-November 1962)</h4>
<p>Battle of Galwan Valley: The conflict was centered around border disputes in the Himalayan region, particularly the Aksai Chin and Arunachal Pradesh areas. The Chinese forces launched a major offensive against India in the eastern and western sectors.

Key Battles:

Battle of the Galwan Valley: The most significant clash occurred in the Galwan Valley, where the Indian Army fought against the better-equipped Chinese forces in difficult terrain. Despite early successes, the Indian Army was overwhelmed, and China captured significant areas of land.

Battle of Rezang La: This was a particularly heroic battle where 114 Indian soldiers from the 13 Kumaon Regiment fought to the last man to hold their position in Chushul, in Ladakh. They were eventually overrun, but their bravery became legendary.</p>

<h5>Outcome:</h5>
<p> China declared a unilateral ceasefire, and the conflict resulted in a border being drawn but remained unresolved. India suffered heavy casualties, which led to significant military reforms and changes in defense policy.</p>
<h4>3. Indo-Pakistani War of 1965 (August 1965 – September 1965)</h4>
<p>This conflict was sparked by ongoing territorial disputes in Kashmir. Pakistan launched Operation Gibraltar to infiltrate forces into Indian-administered Kashmir, which escalated into full-scale war.

Key Battles:

Battle of Asal Uttar: This battle in the Punjab region was one of the largest tank battles since World War II, where Indian forces decisively defeated Pakistani armored units and inflicted significant losses on them.

Battle of Chamb: Pakistani forces initially made significant advances but were repelled by the Indian Army in a series of well-coordinated counterattacks.</p>

<h5>Outcome: </h5>
<p>The war ended in a stalemate, and both sides agreed to a ceasefire brokered by the United Nations. The Tashkent Agreement was signed in 1966, but no major territorial changes occurred.</p>
<h4>4. Indo-Pakistani War of 1971 (December 1971)</h4>
<p>This war was triggered by Pakistan's brutal crackdown on East Pakistan (now Bangladesh) and the subsequent creation of a refugee crisis in India. India intervened militarily to support East Pakistan's independence movement.

Key Battles:

Battle of Longewala: A famous battle in the Rajasthan sector, where a small Indian force successfully held off a much larger Pakistani force, using tactical ingenuity and air support.

Battle of Basantar: A significant tank battle fought in the Shakargarh sector, where Indian forces inflicted heavy losses on the Pakistani armored units.

Battle of Garibpur: A series of battles around East Pakistan (now Bangladesh), where the Indian Army, alongside Mukti Bahini (Bangladeshi freedom fighters), captured crucial positions.</p>

<h5>Outcome:</h5> <p>India achieved a decisive victory, leading to the surrender of Pakistani forces in East Pakistan (now Bangladesh) on December 16, 1971. The war resulted in the creation of Bangladesh as an independent nation.</p>
<h4>5. Kargil War (1999)</h4>
<p>The Kargil War occurred after Pakistani forces infiltrated and occupied strategic positions in the Kargil district of Jammu and Kashmir, along the Line of Control (LoC).

Key Battles:

Battle of Tiger Hill: One of the most famous battles, where Indian forces launched a successful assault to reclaim Tiger Hill, a vital peak that had been occupied by Pakistani forces.

Battle of Tololing: Another critical battle, where Indian forces successfully recaptured the Tololing ridge, strategically important for controlling access to the Kargil area.

Operation Vijay: The overarching Indian military operation that led to the reclaiming of the entire Kargil region.</p>

<h5>Outcome:<h5> <p>India successfully recaptured all the territories occupied by Pakistani forces, and the war ended in a victory for India. Pakistan was forced to withdraw under international pressure, and the conflict highlighted India's military preparedness and resolve.</p>
        `;
        
        document.getElementById('army-history').innerHTML = armyHistory;
    });
    document.getElementById("navy-history-btn").addEventListener("click", function() {
        const navyHistory = `
            <h1>History of the Indian Navy</h1>
            <h2>1. Early Post-Independence Era (1947-1950s)</h2>
<p>When India gained independence in 1947, the Indian Navy was relatively small and primarily inherited ships from the Royal Indian Navy under British rule. The navy faced significant challenges, including the integration of princely states and modernization.

Indian Naval Establishment: The Indian Navy began with about 30 ships and 7,000 personnel, most of whom were former British officers and sailors.

First Flagship: The first major warship commissioned into the Indian Navy post-independence was the INS Delhi (D-61), a light cruiser, in 1950.

Modernization: The 1950s saw the Indian Navy starting to modernize, with the acquisition of new vessels, including British ships like HMS Loch class frigates and Leander-class frigates.</p>

<h2>2. Indo-Pakistani War of 1965</h2>
<p>In 1965, India and Pakistan fought the Second Indo-Pakistani War over the Kashmir region, and the Indian Navy played an important role in the conflict.

Naval Blockade: During the war, the Indian Navy initiated a blockade on Pakistan's coast, aiming to cut off vital supply lines and disrupt Pakistan’s economy. The Indian Navy’s Western Fleet was deployed off the Karachi coastline, effectively neutralizing Pakistan's ability to conduct maritime operations.

Operation Dwarka: The Indian Navy launched Operation Dwarka, a successful raid on the Pakistani coastal city of Dwarka in Gujarat, where it destroyed Pakistani radar installations. This operation demonstrated India’s growing naval capability and its ability to strike at enemy coastal installations.</p>

<h2>3. Indo-Pakistani War of 1971 and the Creation of Bangladesh</h2>
<p>The Indo-Pakistani War of 1971 was a pivotal moment in the history of the Indian Navy. The conflict was triggered by the crisis in East Pakistan (now Bangladesh), and the Indian Navy played a key role in ensuring India’s victory.

Naval Blockade of East Pakistan: The Indian Navy imposed a naval blockade on East Pakistan (Bangladesh), preventing Pakistani ships from entering or exiting the Bay of Bengal. This severely restricted Pakistan’s ability to support its military operations in the region.

Operation Trident: One of the most significant operations of the war, Operation Trident involved a daring attack on Karachi, Pakistan's largest port city. On December 4, 1971, the Indian Navy launched a surprise attack using Missile Boats, sinking several Pakistani warships and merchant vessels, and damaging Pakistan's oil storage facilities. This attack crippled Pakistan’s naval capabilities.

Operation Python: In the same vein, Operation Python was carried out a few days later, targeting remaining Pakistani vessels. It further reinforced India’s dominance in the maritime theater.

Result: The war culminated in the surrender of Pakistan's Eastern Command in Dhaka on December 16, 1971, leading to the creation of Bangladesh. The Indian Navy's successful operations contributed significantly to India’s victory, and the operation is still regarded as one of the Indian Navy’s finest hours.</p>

<h2>4. Post-1971 Developments and Modernization</h2>
<p>After the 1971 war, the Indian Navy focused on modernization, expansion, and technological advancements.

The Cold War and Strategic Developments
The 1970s and 1980s saw the Indian Navy making significant advancements in terms of warships, submarines, and aircraft. The navy started moving towards a blue-water navy capable of projecting power far beyond its shores.

INS Vikrant (R11), the first aircraft carrier of independent India, was commissioned in 1961 and remained in service until 1997. It played an important role in the Navy’s operations.

In 1986, INS Viraat, an aircraft carrier based on the British HMS Hermes, was commissioned. It remained a cornerstone of the Indian Navy until its decommissioning in 2017.</p>

<h2>5. Kargil Conflict (1999)</h2>
<p>The Kargil War between India and Pakistan in 1999 was primarily a land conflict, but the Indian Navy’s presence in the Indian Ocean added a layer of strategic depth to the overall defense strategy.

Naval Blockade: In response to the Kargil conflict, the Indian Navy implemented a naval blockade of Pakistan, signaling India's readiness to escalate the conflict should Pakistan continue its incursions into Indian territory.

Naval Readiness: The Navy's readiness to deploy aircraft carriers and submarines near the coastline was a significant psychological and strategic maneuver, ensuring that Pakistan did not escalate the conflict into the maritime domain.

While the Kargil conflict was primarily an army operation, the Indian Navy’s strategic positioning and readiness contributed to Pakistan’s decision not to open a second front.</p>

<h2>Key Achievements of the Indian Navy</h2>
<p>
Maritime Diplomacy: The Indian Navy plays a crucial role in maintaining India's maritime diplomacy. It has participated in various multilateral naval exercises like Malabar, RIMPAC, and AUSINDEX, enhancing defense relations with countries like the U.S., Japan, and Australia.

Global Power Projection: The Navy is a key player in India’s “Act East” and “Look East” policies, allowing India to project power beyond its borders and safeguard its interests in the Indian Ocean.

Anti-Piracy Operations: The Indian Navy has been actively involved in anti-piracy operations off the coast of Somalia, providing security to merchant vessels.

Nuclear Deterrence: The commissioning of INS Arihant and the planned fleet of nuclear submarines ensures that India’s strategic deterrence is credible.</p>


            
        `;
        document.getElementById('navy-history').innerHTML = navyHistory;
    });
    document.getElementById("airforce-history-btn").addEventListener("click", function() {
        const airforceHistory = `
            <h3>History of the Indian Air Force</h3>
             <h4>1. Formation and Early History (1930s - 1947)</h4>
<h5>Pre-Independence (1930s - 1947)</h5>
<p>Formation: The Royal Indian Air Force (RIAF) was officially formed on October 8, 1932, during British colonial rule, with its first squadron being raised in Karachi. The Royal Air Force (RAF) of the United Kingdom assisted in training Indian personnel. Initially, the force had limited resources, comprising a small number of pilots, aircraft, and ground staff.

Role During WWII: During World War II, the Royal Indian Air Force played a significant role in several key theaters of war, particularly in the Burma Campaign against Japan. The RIAF's efforts in protecting the British Raj from Japanese forces were notable. The IAF also played an important role in air transport and reconnaissance missions.

Indian Participation: Thousands of Indian airmen served in the Royal Air Force (RAF) during the war, and several Indian pilots achieved high distinction, including Subroto Mukerjee, who would go on to become the first Indian chief of the Indian Air Force.

Post-Independence (1947 - 1950s)
After India gained independence in 1947, the Royal Indian Air Force was renamed the Indian Air Force on January 26, 1950, the same day India became a republic.

The early years were marked by the incorporation of additional aircraft and modernizing the IAF's infrastructure. The Indian Air Force initially relied on British-designed aircraft, such as Vickers Wellington bombers and Hawker Hurricanes.</p>

<h3>Formation and Early History (1930s - 1947)</h3>
<h4>Pre-Independence (1930s - 1947)</h4>
<p>Formation: The Royal Indian Air Force (RIAF) was officially formed on October 8, 1932, during British colonial rule, with its first squadron being raised in Karachi. The Royal Air Force (RAF) of the United Kingdom assisted in training Indian personnel. Initially, the force had limited resources, comprising a small number of pilots, aircraft, and ground staff.

Role During WWII: During World War II, the Royal Indian Air Force played a significant role in several key theaters of war, particularly in the Burma Campaign against Japan. The RIAF's efforts in protecting the British Raj from Japanese forces were notable. The IAF also played an important role in air transport and reconnaissance missions.

Indian Participation: Thousands of Indian airmen served in the Royal Air Force (RAF) during the war, and several Indian pilots achieved high distinction, including Subroto Mukerjee, who would go on to become the first Indian chief of the Indian Air Force.

Post-Independence (1947 - 1950s)
After India gained independence in 1947, the Royal Indian Air Force was renamed the Indian Air Force on January 26, 1950, the same day India became a republic.

The early years were marked by the incorporation of additional aircraft and modernizing the IAF's infrastructure. The Indian Air Force initially relied on British-designed aircraft, such as Vickers Wellington bombers and Hawker Hurricanes.</p>

<h3>3. The 1965 Indo-Pakistani War</h3>
<p>The 1965 Indo-Pakistani War saw the Indian Air Force play a central role in India's military strategy.

Air Superiority: One of the most significant contributions of the IAF in 1965 was its ability to achieve air superiority over Pakistan’s air force. The IAF launched precision air strikes on Pakistani airfields and military positions.

Battle of Pathankot: One of the major air battles occurred in the Pathankot sector, where the IAF successfully struck Pakistani airbases, hindering Pakistan’s ability to mount air attacks.

Operation Grand Slam: The IAF's Operation Grand Slam was launched to target key Pakistani targets, including their communication lines. This operation demonstrated the capability of the IAF in conducting coordinated air-ground operations.

Outcome: The war ended in a stalemate with both sides agreeing to a ceasefire. However, the IAF had proven its ability to strike effectively, delivering decisive air support to Indian ground forces.</p>

<h3>4. The 1971 Indo-Pakistani War and the Creation of Bangladesh</h3>
<p>The 1971 Indo-Pakistani War was a turning point for the Indian Air Force, as it not only played a decisive role in the conflict but also helped in the creation of Bangladesh.

Air Operations: The IAF launched a series of pre-emptive airstrikes against Pakistani airbases, severely crippling Pakistan's air force. This was crucial in ensuring India's dominance in the air and preventing any meaningful air retaliation from Pakistan.

Operation Cactus Lily: The IAF also launched Operation Cactus Lily, a coordinated effort to assist Indian ground forces in East Pakistan (now Bangladesh). The air force conducted air raids against Pakistani military targets in Dhaka, Chittagong, and other cities.

Naval Blockade: The IAF also supported the Indian Navy’s blockade of East Pakistan and assisted in transporting troops to the frontlines.

Outcome: The war culminated in a victory for India, with the surrender of 93,000 Pakistani troops in East Pakistan on December 16, 1971, leading to the creation of Bangladesh. The IAF’s performance was widely praised, and it cemented its reputation as one of the most powerful air forces in the region.</p>

<h3>5. Post-1971: Modernization and Growth (1970s - 1990s)</h3>
<p>After the 1971 victory, the Indian Air Force underwent a major modernization process, updating its fleet with newer aircraft and equipment.

Aircraft Procurement: The IAF inducted more advanced aircraft, including MiG-21s, Mirage 2000s, and Sukhoi Su-30s, enhancing its operational capabilities. The acquisition of Jaguar bombers in the 1980s increased its strike capabilities.

Role in Peacekeeping: The Indian Air Force played an important role in UN peacekeeping missions across the globe, including in regions like Sri Lanka and Lebanon. The IAF also participated in humanitarian operations, such as the Indian Ocean Tsunami of 2004, where it provided relief and evacuation support.</p>

<h3>6. Kargil War (1999)</h3>
<p>The Kargil War between India and Pakistan in 1999 was the next major conflict in which the Indian Air Force proved its capability.

Air-to-Ground Attacks: During the Kargil conflict, the IAF was instrumental in providing close air support to Indian Army units fighting in the Kargil hills. The IAF carried out airstrikes on Pakistani positions at high altitudes.

Operation Safed Sagar: The IAF’s Operation Safed Sagar was launched to target Pakistani forces entrenched in Kargil, and its Mirage 2000 and MiG-21 aircraft played a vital role in neutralizing Pakistani artillery and troop positions.

Strategic Air Operations: The IAF also launched bombing raids on supply routes and Pakistani positions along the Line of Control (LoC), significantly hampering Pakistani operations.

Outcome: India’s success in Kargil was partly due to the IAF’s tactical air superiority and effective air strikes. The air force’s role in this conflict solidified its position as a key component of India’s military strategy.</p>

<h2>8. Key Achievements of the Indian Air Force</h2>
<p>Air Superiority: The IAF has maintained air superiority during multiple conflicts, ensuring the protection of Indian skies.

Humanitarian Efforts: The IAF has been involved in numerous humanitarian missions, including disaster relief, evacuations, and medical airlifts across the world.

Strategic Deterrence: The IAF, with its sophisticated aircraft, including nuclear-capable bombers, plays a key role in India’s strategic deterrence policy.

Global Partnerships: The IAF has expanded its role on the global stage through participation in international exercises and military exchanges, strengthening ties with countries like the United States, Russia, and France</p>




        `;
        document.getElementById('airforce-history').innerHTML = airforceHistory;
    });
    
});

function fetchData(category) {
    fetch(`http://localhost:5000/api/${category}`)
        .then(response => response.json())
        .then(data => {
            renderData(category, data);
        })
        .catch(err => console.error('Error fetching data:', err));
}


function renderData(category, data) {
    const section = document.getElementById(`${category}-list`);
    section.innerHTML = ''; // Clear existing content

    data.forEach(item => {
        const card = document.createElement('div');
        card.classList.add('card');
        
        const title = document.createElement('h3');
        title.textContent = item.name;

        const description = document.createElement('p');
        description.textContent = item.description;

        card.appendChild(title);
        card.appendChild(description);
        section.appendChild(card);
    });
}

