import React from 'react';
import { View, Text, FlatList } from 'react-native';

// Components
import Item from '../components/item.component';
import Find from '../components/find.component';

export default class InboxScreen extends React.Component {
  constructor(props) {
    super(props);
  
    this.state = {
      tasks: [
        {
          id: 1,
          text: 'Fazer tarefa de casa',
          status: false,
        },
        {
          id: 2,
          text: 'Limpar meu quarto',
          status: false,
        }
      ]
    }
  }

  static navigationOptions = {
    title: 'Caixa de entrada',
    headerStyle: {
      backgroundColor: '#DF0101',
    },
    headerTintColor: '#fff',
    headerTitleStyle: {
      fontWeight: 'bold',
      fontSize: 18
    },
  }

  render() {
    return (
      <View>
        <Find
          placeholder="Buscar em Caixa de Entrada"
        />
        <View>
          <FlatList 
            data={this.state.tasks}
            renderItem={
              ({item}) => (
                <Item
                  data={item}
                />
              )
            }
            keyExtractor={(item) => item.id.toString()}
          />
        </View>
      </View>
    );
  }
}