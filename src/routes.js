import { createStackNavigator } from  'react-navigation';

import InboxScreen from './screens/inbox.screen';

export default AppNavigator = createStackNavigator({
  Home: InboxScreen
},
{
  initialRouteName: "Home"
});