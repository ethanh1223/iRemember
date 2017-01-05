import React from 'react';
import {
  ScrollView,
  StyleSheet,
  Text,
  View,
  ListView,
  Picker,
  Image,
  TouchableHighlight
} from 'react-native';

import {
  ExponentLinksView,
} from '@exponent/samples';

import Router from '../navigation/Router.js'

export default class RemindersScreen extends React.Component {

  constructor () {
    super ();

    var dataSource = new ListView.DataSource({rowHasChanged: function (r1, r2) {
      return r1 !== r2
    }})

    this.state = {
      upcomingReminders: [],
      completedReminders: [],
      dataSource: dataSource.cloneWithRows([{task: 'Laundry', date: 'Today', time: '9:00 P.M', note: 'Dont forget to take it out!'}, {task: 'Hair', date: 'Tomorrow', time: '4:45 P.M', note: 'Get yo hair did guuuurl'}]),
    }
  }

  static route = {
    navigationBar: {
      title: 'Reminders',
    },
  }

  _goToReminder = (reminder) => {
    this.props.navigator.push(Router.getRoute('reminder', {reminder: reminder}))
  }

  render() {
    return (

        <ListView
          style={styles.list}
          dataSource={this.state.dataSource}
          renderRow={(reminder) =>
            <TouchableHighlight onPress={() => this._goToReminder(reminder)}>
              <View style={styles.reminderView}> 
                <Image style={styles.reminderImage} source={{uri: 'https://encrypted-tbn2.gstatic.com/images?q=tbn:ANd9GcQrqidYU7IoDmubY_c9zU9pBGhfVBcJRvcaK6ghytIcCKrK-IAngQ'}} /> 
                <Text style={styles.reminderText}>{reminder.task}</Text>
              </View>
            </TouchableHighlight> 
          }
          renderSeparator={(sectionId, rowId) => <View key={rowId} style={styles.separator} />}
        />
    );
  }

}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: 15,
  },
    separator: {
    flex: 1,
    height: StyleSheet.hairlineWidth,
    backgroundColor: '#8E8E8E',
  },
  reminderImage: {
    height: 50,
    width: 50
  },
  list: {
    backgroundColor: '#2c3e50'
  },
  reminderText: {
    color: '#ECECEC',
    alignSelf: 'center',
    paddingLeft: 20,
    fontSize: 40
  },
  reminderView: {
    flexDirection: 'row',
  }
});