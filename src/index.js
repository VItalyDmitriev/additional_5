module.exports = function check(str, bracketsConfig) {
  str = str.replace(/\s/g, "");
  function checkСoincidence(){    
    for(var i=0; i<bracketsConfig.length; i++){
      var reg = bracketsConfig[i][0]+bracketsConfig[i][1];
      var found = str.includes(reg);
      if(found !== false){
        deleteСoincidence(reg);
      }
    }
    
  }
  function deleteСoincidence(reg){
    str = str.replace(reg, "");
    checkСoincidence();
  }
  
  checkСoincidence();
  if(str == 0){
    return true;
  }
  else{
    return false;
  }
}
