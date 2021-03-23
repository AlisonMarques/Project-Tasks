import React, {Component} from 'react';
import {View, Text, ImageBackground, StyleSheet} from 'react-native';

import commonStyles from '../commonStyles';
import todayImage from '../../assets/assets/imgs/today.jpg';

import moment from 'moment';
// vai traduzir as datas para o portugues-Brasil
import 'moment/locale/pt-br';

import Task from '../components/Task';

// Componente em classe
export default class TaskList extends Component {
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
          <Task
            desc="Comprar Livro"
            estimateAt={new Date()}
            doneAt={new Date()}
          />

          <Task desc="Ler Livro" estimateAt={new Date()} doneAt={null} />

          <Task
            desc="Comprar Livro"
            estimateAt={new Date()}
            doneAt={new Date()}
          />

          <Task desc="Ler Livro" estimateAt={new Date()} doneAt={null} />
          <Task
            desc="Comprar Livro"
            estimateAt={new Date()}
            doneAt={new Date()}
          />

          <Task desc="Ler Livro" estimateAt={new Date()} doneAt={null} />
          <Task
            desc="Comprar Livro"
            estimateAt={new Date()}
            doneAt={new Date()}
          />

          <Task desc="Ler Livro" estimateAt={new Date()} doneAt={null} />
          <Task
            desc="Comprar Livro"
            estimateAt={new Date()}
            doneAt={new Date()}
          />

          <Task desc="Ler Livro" estimateAt={new Date()} doneAt={null} />
          <Task
            desc="Comprar Livro"
            estimateAt={new Date()}
            doneAt={new Date()}
          />

          <Task desc="Ler Livro" estimateAt={new Date()} doneAt={null} />
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
