import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';
import {createDrawerNavigator} from 'react-navigation-drawer';

import SplashScreen from "../features/SplashScreen";
import SideMenu from './sideMenu';
//@BlueprintImportInsertion
import BlankScreen1586672Navigator from '../features/BlankScreen1586672/navigator';
import BlankScreen1685251Navigator from '../features/BlankScreen1685251/navigator';
import BlankScreen1583005Navigator from '../features/BlankScreen1583005/navigator';
import Settings83004Navigator from '../features/Settings83004/navigator';
import UserProfile82997Navigator from '../features/UserProfile82997/navigator';
import Settings82996Navigator from '../features/Settings82996/navigator';
import Settings82994Navigator from '../features/Settings82994/navigator';
import SignIn282992Navigator from '../features/SignIn282992/navigator';

/**
 * new navigators can be imported here
 */

const AppNavigator = {

    //@BlueprintNavigationInsertion
BlankScreen1586672: { screen: BlankScreen1586672Navigator },
BlankScreen1685251: { screen: BlankScreen1685251Navigator },
BlankScreen1583005: { screen: BlankScreen1583005Navigator },
Settings83004: { screen: Settings83004Navigator },
UserProfile82997: { screen: UserProfile82997Navigator },
Settings82996: { screen: Settings82996Navigator },
Settings82994: { screen: Settings82994Navigator },
SignIn282992: { screen: SignIn282992Navigator },

    /** new navigators can be added here */
    SplashScreen: {
      screen: SplashScreen
    }
};

const DrawerAppNavigator = createDrawerNavigator(
  {
    ...AppNavigator,
  },
  {
    contentComponent: SideMenu
  },
);

const AppContainer = createAppContainer(DrawerAppNavigator);

export default AppContainer;
