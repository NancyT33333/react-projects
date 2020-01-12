export function compareArrays (a, b) {
    // if length is not equal 
    if( a.length != b.length ) {
      return false; 
      }
    else
    { 
    // comparing each element of array 
      for( var i = 0; i < a.length; i++ ) {
          if( a[i] != b[i] ) 
          return false; 
          }
      return true; 
    } 
  }

export function getOccurrence(array, value) {
    return array.filter((v) => (compareArrays(v, value))).length;
}

export function isArrInArr (arr1, arr2) {
  return getOccurrence(arr2, arr1) >0 ? true : false; 
}