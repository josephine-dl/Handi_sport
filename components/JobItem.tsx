import React from 'react'
import { StyleSheet, View, Text, Image } from 'react-native'

class JobItem extends React.Component {
  render() {
    const job = this.props.job;
    return (
      <View style={styles.main_container}>
        <Image
          style={styles.image}
          source={{uri: job.imageURL}}


        />
        <View style={styles.content_container}>

          <View style={styles.header_container}>
            <Text style={styles.title_text}>{job.title}</Text>
          </View>

          <View style={styles.header_container}>
            <Text style={styles.title_text}>{job.company}</Text>
          </View>

          <View>
            <Text style={{color: '#000000'}} numberOfLines={6}>{job.level}</Text>
          </View>

          <View>
            <Text style={styles.description_text}>{job.wage}</Text>
          </View>

          <View>
            <Text style={styles.description_text}>{job.type_of_contract} - {job.localisation}</Text>
          </View>

          <View style={styles.description_container}>
            <Text style={styles.description_container}>Publiée le {job.date}</Text>
          </View>

            <Text style={styles.description_container}>+ d'infos pour postuler</Text>

        </View>
      </View>
    )
  }
}
const styles = StyleSheet.create({
  main_container: {
    height: 190,
    flexDirection: 'row',
    marginHorizontal: 10,
    marginVertical: 10,
    borderRadius: 10,
    borderColor: '#00CCCB',
    borderWidth: 2,
    padding: 10
  },
  image: {
    width: 131,
    height: 67,
    marginLeft: -3.5,
    margin: 5,

  },
  content_container: {
    flex: 1,
    margin: 5
  },
  header_container: {

    flex: 3.3,
    flexDirection: 'row',

  },
  title_text: {
    fontWeight: 'bold',
    fontSize: 14,
    flex: 1,
    flexWrap: 'wrap',
    paddingRight: 5
  },
  description_container: {
    flex: 3
  },
  description_text: {
    color: '#666666'
  },
  date_container: {
    flex: 1
  },
  date_text: {
    textAlign: 'right',
    fontSize: 11
  }
})

export default JobItem
