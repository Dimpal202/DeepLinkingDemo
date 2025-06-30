import React, { useState, useEffect } from 'react';
import {
  ActivityIndicator,
  View,
  Text,
  FlatList,
  Pressable
} from 'react-native';



const Home = ({ navigation }) => {
  const [data, setData] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    fetch('https://jsonplaceholder.typicode.com/users')
      .then(res => res.json())
      .then(res => {
        setData(res);
        setIsLoading(false);
      })
      .catch(error => {
        console.log(error);
      });
  }, []);

  const renderList = ({ item }) => {
    return (
      <Pressable
        // onPress={() => alert('Navigate to Details screen')}
          onPress={() => navigation.navigate('DetailScreen', { personDetailsId: item.id })}
        style={{ paddingHorizontal: 10 }}
      >
        <Text style={{ fontSize: 24, color: '#000' }}>{item.name}</Text>
      </Pressable>
    );
  };

  const Separator = () => (
    <View
      style={{
        borderBottomColor: '#d3d3d3',
        borderBottomWidth: 1,
        marginTop: 10,
        marginBottom: 10
      }}
    />
  );

  return (
    <View style={{ flex: 1 }}>
      {isLoading ? (
        <ActivityIndicator color="blue" size="large" />
      ) : (
        <>
          <FlatList
            data={data}
            contentContainerStyle={{
              paddingVertical: 20
            }}
            keyExtractor={item => item.id}
            ItemSeparatorComponent={Separator}
            renderItem={renderList}
          />
        </>
      )}
    </View>
  );
};

export default Home;