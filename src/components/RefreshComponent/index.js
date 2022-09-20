import React, {useState} from 'react';
import {View, StyleSheet, Text, RefreshControl, ScrollView} from 'react-native';

const RefreshComponenmt = () => {
  const [refresh, setRefresh] = useState(false);

  const onRefresh = () => {
    setRefresh(true);
    setTimeout(() => {
      setRefresh(false);
    }, 5000);
  };
  return (
    <View style={styles.container}>
      <ScrollView
        contentContainerStyle={styles.scrollView}
        refreshControl={
          <RefreshControl refreshing={refresh} onRefresh={onRefresh} />
        }>
        <Text>Pull down to see RefreshControl indicator</Text>
        <Text>Hello</Text>
      </ScrollView>
    </View>
  );
};

export default RefreshComponenmt;

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  scrollView: {
    flex: 1,
    backgroundColor: 'pink',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
