const extractLanguage = locale => {
  console.log(locale.substring(0, 2));
  
  console.log(locale.split("_")[0]);
}


extractLanguage('en_US.UTF-8');  // 'en'
extractLanguage('en_GB.UTF-8');  // 'en'
extractLanguage('ko_KR.UTF-16'); // 'ko'