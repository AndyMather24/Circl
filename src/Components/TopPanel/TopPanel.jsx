import React, { useState } from 'react';
import { View, Text, ScrollView, TouchableOpacity } from 'react-native';
import PromoCard from '../PromoCard/PromoCard';
import { styles } from './TopPanel.Style';
import FixtureCard from '../FixtureCard/FixtureCard';
import TabBarIcon from '../TabBarIcon';
const TopPanel = ({ navigation, matches }) => {
  const [IsVisable, SetIsVisable] = useState(true);

  return (
    <View style={IsVisable ? styles.top : styles.hideTop}>
      <View style={styles.headerRow}>
        <Text style={styles.header}>Fixtures</Text>
        <TouchableOpacity onPress={TogglePanel} style={styles.chevron}>
          {DisplayChevron(IsVisable)}
        </TouchableOpacity>
      </View>
      {renderPanel(IsVisable)}
    </View>
  );

  function TogglePanel() {
    SetIsVisable(!IsVisable);
  }

  function DisplayChevron(isVisable) {
    return isVisable == true ? <TabBarIcon name="chevron-up" /> : <TabBarIcon name="chevron-down" />;
  }

  function renderPanel(isVisable) {
    if (isVisable) {
      return (
        <ScrollView horizontal>
          <PromoCard />
          {matches.map((match, i) => {
            return <FixtureCard key={i} navigation={navigation} match={match}></FixtureCard>;
          })}
        </ScrollView>
      );
    }
  }
};

export default TopPanel;
