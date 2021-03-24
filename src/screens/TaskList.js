import React, {Component} from 'react';
import {View, Text, ImageBackground, StyleSheet, FlatList} from 'react-native';

import commonStyles from '../commonStyles';
import todayImage from '../../assets/assets/imgs/today.jpg';

import moment from 'moment';
// vai traduzir as datas para o portugues-Brasil
import 'moment/locale/pt-br';

import Task from '../components/Task';

// Componente em classe
export default class TaskList extends Component {
  //criando um estado para criar a funcionalidade do scroll
  state = {
    tasks: [
      {
        id: Math.random(),
        desc: 'Comprar livro de React Native',
        estimateAt: new Date(),
        doneAt: new Date(),
      },
      {
        id: Math.random(),
        desc: 'Comprar livro de React Native',
        estimateAt: new Date(),
        doneAt: null,
      },
    ],
  };

  //Alterando o estado da tarefa através do clique.
  toggleTask = taskId => {
    const tasks = [...this.state.tasks];
    tasks.forEach(task => {
      if (task.id === taskId) {
        task.doneAt = task.doneAt ? null : new Date();
      }
    });
    this.setState({tasks});
  };

  render() {
    const today = moment()
      .locale('pt-br')
      .format('ddd, D [de] MMMM');

    return (
      <View style={styles.container}>
        <ImageBackground source={todayImage} style={styles.background}>
          <View style={styles.titleBar}>
            <Text style={styles.title}>Hoje</Text>
            <Text style={styles.subtitle}>{today}</Text>
          </View>
        </ImageBackground>

        <View style={styles.taskList}>
          {/* Pegando o estado pelo FlatListe jogando na task */}
          <FlatList
            data={this.state.tasks}
            keyExtractor={item => `${item.id}`}
            renderItem={({item}) => (
              <Task {...item} toggleTask={this.toggleTask} />
            )}
          />
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    // permitindo que a imagem ocupe toda a tela
    flex: 1,
  },
  background: {
    // permitindo que a imagem ocupe toda a tela
    flex: 3,
  },
  taskList: {
    flex: 7,
  },
  titleBar: {
    flex: 1,
    // justifyContent sempre vai mexer no eixo da coluna no mobile
    justifyContent: 'flex-end',
  },
  title: {
    fontFamily: commonStyles.fontFamily,
    color: commonStyles.colors.secondary,
    fontSize: 50,
    marginLeft: 20,
    marginBottom: 20,
  },
  subtitle: {
    fontFamily: commonStyles.fontFamily,
    color: commonStyles.colors.secondary,
    fontSize: 20,
    marginLeft: 20,
    marginBottom: 30,
  },
});
