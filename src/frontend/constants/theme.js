import { greenA700, green600, darkBlack, white, fullBlack } from 'material-ui/styles/colors';
import getMuiTheme from 'material-ui/styles/getMuiTheme';
import {u_darkGreen} from'./uColors';

// This replaces the textColor value on the palette
// and then update the keys for each component that depends on it.
// More on Colors: http://www.material-ui.com/#/customization/colors

export const muiTheme = getMuiTheme({
    palette: {
        //primary1Color: green400,
       // primary2Color: u_darkGreen,
        //primary3Color: green400,
        //accent1Color: pinkA200,
        //accent2Color: grey100,
        //accent3Color: grey500,
        //textColor: darkBlack,
        //alternateTextColor: white,
        //canvasColor: white,
        //borderColor: grey300,
        //pickerHeaderColor: cyan500,
        //shadowColor: fullBlack,
    },
    appBar: {
        height: 40,
   //     backgroundColor: white,
    },
    flatButton: {
        //textColor: palette.textColor,
   //     primaryTextColor: u_darkGreen,
        //secondaryTextColor: palette.accent1Color,
      },
      tabs: {
     //   backgroundColor: white,
    //    textColor: u_darkGreen,
    //    selectedTextColor: u_darkGreen,
      }
});
