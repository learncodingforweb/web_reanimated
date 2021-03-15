// Generate required css
import FontAwesomeiconFont from 'react-native-vector-icons/Fonts/FontAwesome.ttf';
import AntDesigniconFont from 'react-native-vector-icons/Fonts/AntDesign.ttf';

const FontAwesomeiconFontStyles = `@font-face {
  src: url(${FontAwesomeiconFont});
  font-family: FontAwesome;
}`;

const AntDesigniconFontStyles = `@font-face {
  src: url(${AntDesigniconFont});
  font-family: AntDesign;
}`;

// Create stylesheet
const style = document.createElement('style');
style.type = 'text/css';
if (style.styleSheet) {
  console.log('phase 1');
  style.styleSheet.cssText = FontAwesomeiconFontStyles;
} else {
  console.log('phase 2');
  style.appendChild(document.createTextNode(FontAwesomeiconFontStyles));
  style.appendChild(document.createTextNode(AntDesigniconFontStyles));
}

// Inject stylesheet
document.head.appendChild(style);