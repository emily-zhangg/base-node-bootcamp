import {readFile} from 'fs'
import {rgbToHex,hexToRgb} from './css-converter.js'

const filename = process.argv[2]

const handleFileRead = (err, content) =>{
  if (err){
    console.log('ERROR:'+ err)
    return
  }
  const contentArr = content.split('\n');
  let i;
  for (i=0;i<contentArr.length;i+=1){
    if (contentArr[i].includes('#')){
      hexToRgb(contentArr[i]);
    }
    if (contentArr[i].includes('rgb(')){
      rgbToHex(contentArr[i]);
    }
  }


}
readFile(filename,'utf-8',handleFileRead)