import React from 'react';
import { View, StyleSheet, ScrollView } from 'react-native';
import { Component } from 'react/cjs/react.development';
import FixtureList from '../Components/FixtureList/FixtureList';
import SubHeader from '../Components/SubHeader/SubHeader';
import TopPanel from '../Components/TopPanel/TopPanel';
import * as fixtureService from '../Services/FixtureService';

class ExploreScreen extends Component {
  constructor(props) {
    super(props);
    this.state = {
      fixturesOverview: [],
      upcomingFixtures: [],
    };
  }
  componentDidMount() {
    this.getFixtureData();
  }

  render() {
    const { fixturesOverview, upcomingFixtures } = this.state;
    const { navigation } = this.props;

    return (
      <View style={styles.container}>
        <TopPanel navigation={navigation} matches={upcomingFixtures}></TopPanel>
        <ScrollView>
          {fixturesOverview.map((fixture, i) => {
            return [<SubHeader league={fixture.league} />, <FixtureList key={i} navigation={navigation} matches={fixture.matches} />];
          })}
        </ScrollView>
      </View>
    );
  }

  async getFixtureData() {
    try {
      const [Overview, Upcoming] = await Promise.all([fixtureService.getFixturesOverview(), fixtureService.getUpcomingFixtures()]);

      this.setState({ fixturesOverview: Overview, upcomingFixtures: Upcoming });
    } catch (err) {
      console.log(err);
    }
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'rgba(0, 2, 26,1)',
    flexDirection: 'column',
  },
});

export default ExploreScreen;
