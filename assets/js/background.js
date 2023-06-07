function changeBackgroundSetting(){
    //Initializing the container
    settingGeneralContainer.style.display="none"
    settingBalanceContainer.style.display="none"
    settingAboutContainer.style.display="none"

    settingOptionsChangeBgList.style.fontWeight="bold"
    settingOptionsChangeBgList.style.color="var(--secondary-color-dark)"
    
    
    settingOptionsGeneralList.style.fontWeight="normal"
    settingOptionsBalanceList.style.fontWeight="normal"
    settingOptionsAboutList.style.fontWeight="normal"
    
    settingBackgroundChangeContainer.style.display="flex"
    headingChangeBg.textContent="Change Background"
    headingDescriptionChangeBg.textContent="Change your background"
    settingBackgroundChangeContainer.style.width="100%"
    settingBackgroundChangeContainer.style.height="100%"
    backgroundDiv1.style.backgroundImage="url('./assets/images/wallpaper0.svg')"
    backgroundDiv2.style.backgroundImage = "url('./assets/images/wallpaper1.svg')"
    backgroundDiv3.style.backgroundImage = "url('./assets/images/wallpaper2.svg')"
    backgroundDiv4.style.backgroundImage = "url('./assets/images/wallpaper3.svg')"
    backgroundDiv5.style.backgroundImage = "url('./assets/images/wallpaper4.svg')"
    backgroundDiv6.style.backgroundImage = "url('./assets/images/wallpaper5.svg')"
}