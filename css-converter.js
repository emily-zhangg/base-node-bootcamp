const componentToHex =(c)=> {
  let hex = c.toString(16);
  return hex.length == 1 ? "0" + hex : hex;
}

const rgbToHex =(content)=>{
  const rgbValues = content.split('rgb(')[1].split(')')[0].split(', ')
  return console.log("#" + componentToHex(rgbValues[0]) + componentToHex(rgbValues[1]) + componentToHex(rgbValues[2]));

}

const hexToRgb = (content)=>{
    const hex = content.split('#')[1].split(';')[0]
    const bigint = parseInt(hex, 16);
    const r = (bigint >> 16) & 255;
    const g = (bigint >> 8) & 255;
    const b = bigint & 255;

    return console.log(`rgb(${r},${g},${b})`)
}

export {hexToRgb,rgbToHex}