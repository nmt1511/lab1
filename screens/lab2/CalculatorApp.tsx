import { Entypo, MaterialCommunityIcons } from '@expo/vector-icons';
import { evaluate } from 'mathjs';
import React, { useState } from 'react';
import {
    FlatList,
    StyleSheet,
    Text,
    TouchableOpacity,
    Vibration,
    View
} from 'react-native';

const CalcButton = ({ label, onPress, icon }: { label?: string; onPress: () => void; icon?: React.ReactNode }) => (
  <TouchableOpacity style={styles.button} onPress={onPress}>
    {icon ? icon : <Text style={styles.buttonText}>{label}</Text>}
  </TouchableOpacity>
);

export default function CalculatorApp() {
  const [expression, setExpression] = useState('');
  const [result, setResult] = useState('');
  const [historyVisible, setHistoryVisible] = useState(false);
  const [history, setHistory] = useState<{ id: string; value: string }[]>([]);

  const handlePress = (value: string) => {
    Vibration.vibrate(10);

    if (value === 'AC') {
      setExpression('');
      setResult('');
    } else if (value === 'DEL') {
      setExpression(expression.slice(0, -1));
    } else if (value === '=') {
      try {
        const evaluated = evaluate(expression);
        setResult(evaluated.toString());
        setHistory([
          { id: Date.now().toString(), value: `${expression} = ${evaluated}` },
          ...history,
        ]);
        setExpression(evaluated.toString());
      } catch {
        setResult('Error');
      }
    } else if (value === 'π') {
      setExpression(expression + 'pi');
    } else if (value === '√') {
      setExpression(expression + 'sqrt(');
    } else if (value === '!') {
      setExpression(expression + 'factorial(');
    } else {
      setExpression(expression + value);
    }
  };

  const advancedButtons = ['√', 'π', '^', '!', '(', ')'];
  const basicButtons = [
    ['AC', '(', ')', '%'],
    ['7', '8', '9', '/'],
    ['4', '5', '6', '*'],
    ['1', '2', '3', '-'],
    ['0', '.', 'DEL', '+'],
    ['='],
  ];

  return (
    <View style={styles.container}>
      <View style={styles.topRow}>
        <View style={{ flex: 1 }} />
        <TouchableOpacity onPress={() => setHistoryVisible(!historyVisible)}>
          <Entypo name="clock" size={24} color="#333" />
        </TouchableOpacity>
      </View>

      <Text style={styles.expression}>{expression}</Text>
      <Text style={styles.result}>{result}</Text>

      {historyVisible && (
        <FlatList
          data={history}
          keyExtractor={(item) => item.id}
          renderItem={({ item }) => <Text style={styles.historyItem}>{item.value}</Text>}
          style={styles.history}
        />
      )}

      <View style={styles.row}>
        {advancedButtons.map((btn, idx) => (
          <CalcButton key={idx} label={btn} onPress={() => handlePress(btn)} />
        ))}
      </View>

      {basicButtons.map((row, idx) => (
        <View key={idx} style={styles.row}>
          {row.map((btn, i) => (
            <CalcButton
              key={i}
              label={btn !== 'DEL' ? btn : undefined}
              icon={btn === 'DEL' ? <MaterialCommunityIcons name="backspace-outline" size={24} color="#000" /> : undefined}
              onPress={() => handlePress(btn)}
            />
          ))}
        </View>
      ))}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    paddingTop: 60,
    backgroundColor: '#f7f9fc',
  },
  topRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 10,
  },
  expression: {
    fontSize: 26,
    textAlign: 'right',
    marginBottom: 5,
  },
  result: {
    fontSize: 20,
    textAlign: 'right',
    color: '#888',
    marginBottom: 10,
  },
  history: {
    maxHeight: 200,
    backgroundColor: '#e8ebf0',
    borderRadius: 8,
    padding: 8,
    marginBottom: 10,
  },
  historyItem: {
    fontSize: 14,
    color: '#555',
    marginVertical: 2,
  },
  row: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    marginBottom: 10,
  },
  button: {
    backgroundColor: '#dbeafe',
    padding: 20,
    borderRadius: 50,
    minWidth: 60,
    alignItems: 'center',
  },
  buttonText: {
    fontSize: 20,
    color: '#000',
  },
});