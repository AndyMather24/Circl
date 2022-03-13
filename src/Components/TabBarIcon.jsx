import { FontAwesome } from '@expo/vector-icons';
import { Colors } from '../Styles/index';

function TabBarIcon(props) {
  return <FontAwesome size={30} style={{ marginBottom: -3, color: Colors.colors.primaryFont }} {...props} />;
}

export default TabBarIcon;
