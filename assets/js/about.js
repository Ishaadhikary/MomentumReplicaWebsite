function about(){
settingAboutContainer.style.display = "block";
settingOptionsAboutList.style.color="var(--secondary-color-dark)"
settingOptionsChangeBgList.style.color="var(--secondary-color-settings)"
settingOptionsBalanceList.style.color="var(--secondary-color-settings)"
settingOptionsGeneralList.style.color="var(--secondary-color-settings)"
settingOptionsAboutList.style.fontWeight="bold"
settingBackgroundChangeContainer.style.display = "none";
settingOptionsGeneralList.style.fontWeight="normal"
settingOptionsBalanceList.style.fontWeight="normal"
settingOptionsChangeBgList.style.fontWeight="normal"
settingBalanceContainer.style.display = "none";
settingGeneralContainer.style.display="none"
let aboutContent="" 
aboutContent+= `
<h1>About</h1>
<p>This page includes all the necessary information regarding the copyright for the content presented.</p>

<h2 class="bottom-border">Attribution</h2>
<div>
    <p><strong>GIFs Used:</strong></p>
    <a href="https://www.flaticon.com/free-animated-icons/detox" title="detox animated icons" target="_blank">Detox animated icons created by Freepik - Flaticon </a><br>
    <a href="https://www.flaticon.com/free-animated-icons/exercise" title="exercise animated icons" target="_blank">Exercise animated icons created by Freepik - Flaticon </a><br>
    <a href="https://www.flaticon.com/free-animated-icons/work" title="work animated icons" target="_blank">Work animated icons created by Freepik - Flaticon </a>
    
    <p><strong>Icons Used:</strong></p>
    <p>All the icons used in the creation of this website were sourced from Figma and Google Icons.</p>
    
    <p><strong>Images Used:</strong></p>
    <p><a href="https://unsplash.com/">Images obtained from Unsplash</a></p>
    
    <div class="bottom-border">
        <p>The Momentum Extension Replica was created solely for educational purposes and will not be used for commercial purposes.</p>
    </div>
    
    <code>&copy; 2023 Isha Adhikary. All rights reserved.</code>
</div>
`
settingAboutContainer.innerHTML=aboutContent;

}
