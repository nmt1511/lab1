  import { Entypo, MaterialCommunityIcons } from '@expo/vector-icons';
import { evaluate } from 'mathjs';
import React, { useState } from 'react';
import {
  FlatList,
  Modal,
  ScrollView,
  StyleSheet,
  Switch,
  Text,
  TouchableOpacity,
  Vibration,
  View,
} from 'react-native';

  // Component nút bấm máy tính
  const CalcButton = ({
    label,
    onPress,
    icon,
    special
  }: {
    label?: string;
    onPress: () => void;
    icon?: React.ReactNode;
    special?: boolean;
  }) => (
    <TouchableOpacity
      style={[
        styles.button,
        special && styles.specialButton
      ]}
      onPress={onPress}
    >
      {icon ?? <Text style={styles.buttonText}>{label}</Text>}
    </TouchableOpacity>
  );
//npx create-expo-app@latest --template blank-typescript
  export default function CalculatorApp() {
    const [expression, setExpression] = useState('');
    const [result, setResult] = useState('');
    const [historyVisible, setHistoryVisible] = useState(false);
    const [history, setHistory] = useState<{ id: string; value: string }[]>([]);
    const [darkMode, setDarkMode] = useState(false);

    const handlePress = (value: string) => {
      Vibration.vibrate(10);
    
      if (value === 'AC') {
        setExpression('');
        setResult('');
      } else if (value === 'DEL') {
        setExpression(expression.slice(0, -1));
      } else if (value === '=') {
        try {
          let expr = expression;
    
          // Thay cot(x) bằng 1/tan(x)
          expr = expr.replace(/cot\(/g, '1/tan(');

          expr = expr.replace(/√\(/g, 'sqrt(');

          // Chuyển sin(x), cos(x), tan(x) từ độ sang radian
          expr = expr.replace(
            /(sin|cos|tan)\(([^)]+)\)/g,
            (_, func, angle) => `${func}((${angle}) * pi / 180)`
          );
    
          const evaluated = evaluate(expr); // Đánh giá biểu thức đã chuyển đổi
          setResult(evaluated.toString());
          setHistory([{ id: Date.now().toString(), value: `${expression} = ${evaluated}` }, ...history]);
          setExpression(evaluated.toString());
        } catch {
          setResult('Error');
        }
      } else {
        setExpression((prev) => prev + value);
      }
    };

    
    const allButtons = [
      ['sin(', 'cos(', '√(', 'DEL'],
      ['tan(', 'cot', '^', '%'],
      ['(', ')', '/', '*'],
      ['7', '8', '9', '-'],
      ['4', '5', '6', '+'],
      ['1', '2', '3', '='],
      ['0', '.','AC'],
    ];
    

    const theme = darkMode ? darkStyles : lightStyles;

    return (
      <View style={[styles.container, theme.container]}>
        {/* Thanh trên cùng */}
        <View style={styles.topRow}>
          <Switch value={darkMode} onValueChange={setDarkMode} />
          <TouchableOpacity onPress={() => setHistoryVisible(true)}>
            <Entypo name="clock" size={28} color={theme.text.color} />
          </TouchableOpacity>
        </View>

        {/* Hiển thị biểu thức và kết quả */}
        <ScrollView style={styles.display}>
          <Text style={[styles.expression, theme.text]}>{expression}</Text>
          <Text style={[styles.result, theme.text]}>{result}</Text>
        </ScrollView>

        {/* Render các nút bấm */}
        {allButtons.map((row, idx) => (
          <View key={idx} style={styles.row}>
            {row.map((btn, i) => (
              <CalcButton
                key={i}
                label={btn !== 'DEL' ? btn : undefined}
                icon={btn === 'DEL' ? <MaterialCommunityIcons name="backspace-outline" size={24} color={theme.text.color} /> : undefined}
                onPress={() => handlePress(btn)}
                special={['AC', 'DEL'].includes(btn)}
              />
            ))}
          </View>
        ))}

        {/* Modal lịch sử */}
        <Modal visible={historyVisible} animationType="slide" transparent onRequestClose={() => setHistoryVisible(false)}>
          <View style={styles.modalBackground}>
            <View style={[styles.modalContainer, theme.modal]}>
              <Text style={[styles.modalTitle, theme.text]}>Lịch sử</Text>
              <FlatList
                data={history}
                keyExtractor={(item) => item.id}
                renderItem={({ item }) => (
                  <Text style={[styles.historyItem, theme.text]}>{item.value}</Text>
                )}
                style={styles.historyList}
              />
              <View style={styles.modalButtons}>
                <TouchableOpacity style={[styles.clearButton, theme.clearButton]} 
                onPress={() => setHistory([])}>
                  <Text style={styles.clearButtonText}>Xóa tất cả</Text>
                </TouchableOpacity>
                <TouchableOpacity style={[styles.closeButton, theme.closeButton]} 
                onPress={() => setHistoryVisible(false)}>
                  <Text style={styles.closeButtonText}>Đóng</Text>
                </TouchableOpacity>
              </View>
            </View>
          </View>
        </Modal>
      </View>
    );
  }

  // Style chung
  // Style mặc định chung cho app
  const styles = StyleSheet.create({
    container: { 
      flex: 1, // Chiếm toàn bộ màn hình
      padding: 20, // Padding đều
      paddingTop: 10 // Padding trên nhỏ hơn
    },
    topRow: { 
      flexDirection: 'row', // Các phần tử xếp ngang
      justifyContent: 'space-between', // Các phần tử cách xa nhau 2 đầu
      marginBottom: 10 // Cách phần bên dưới 10 đơn vị
    },
    display: { 
      maxHeight: 120, // Chiều cao tối đa cho vùng hiển thị
      marginBottom: 10 // Cách phần nút bấm phía dưới
    },
    expression: { 
      fontSize: 30, // Cỡ chữ cho biểu thức
      textAlign: 'right' // Căn phải
    },
    result: { 
      fontSize: 24, // Cỡ chữ nhỏ hơn cho kết quả
      textAlign: 'right' // Căn phải
    },
    row: { 
      flexDirection: 'row', // Các nút trong cùng một hàng
      justifyContent: 'space-around', // Các nút cách đều nhau
      marginVertical: 5 // Cách trên dưới giữa các hàng nút
    },
    button: { 
      backgroundColor: 'white', // Màu nền nút mặc định
      padding: 20, // Padding bên trong nút
      borderRadius: 14, // Bo góc nút
      minWidth: 65, // Chiều rộng tối thiểu của nút
      alignItems: 'center', // Căn giữa nội dung trong nút
      elevation: 2 // Đổ bóng nhẹ cho nút (Android)
    },
    specialButton: { 
      backgroundColor: '#f8d7da' // Nút đặc biệt như AC, DEL có nền hồng nhạt
    },
    buttonText: { 
      fontSize: 20 // Cỡ chữ trong nút
    },
    modalBackground: { 
      flex: 1, // Modal chiếm toàn bộ màn hình
      backgroundColor: 'rgba(0,0,0,0.5)', // Nền tối mờ
      justifyContent: 'center', // Căn giữa nội dung
      alignItems: 'center' 
    },
    modalContainer: { 
      width: '85%', // Modal chiếm 85% chiều ngang
      borderRadius: 20, // Bo góc
      padding: 20, // Padding bên trong modal
      alignItems: 'center' // Căn giữa các thành phần trong modal
    },
    modalTitle: { 
      fontSize: 24, // Cỡ chữ tiêu đề modal
      fontWeight: 'bold', // Chữ đậm
      marginBottom: 10 // Cách dưới 10 đơn vị
    },
    historyList: { 
      marginVertical: 10 // Cách trên dưới cho danh sách lịch sử
    },
    historyItem: { 
      fontSize: 16, // Cỡ chữ từng dòng lịch sử
      marginVertical: 4 // Khoảng cách giữa các dòng
    },
    modalButtons: { 
      flexDirection: 'row', // Hai nút "Xóa" và "Đóng" xếp ngang
      marginTop: 20 // Cách trên modal
    },
    clearButton: { 
      padding: 10, // Padding nút
      borderRadius: 10, // Bo góc nút
      marginRight: 10 // Cách nút "Đóng" bên phải
    },
    closeButton: { 
      padding: 10, // Padding nút
      borderRadius: 10 // Bo góc nút
    },
    clearButtonText: { 
      color: 'white', // Chữ màu trắng
      fontWeight: 'bold' // Chữ đậm
    },
    closeButtonText: { 
      color: 'white', // Chữ màu trắng
      fontWeight: 'bold' // Chữ đậm
    },
  });


  // Style riêng cho chế độ sáng
  const lightStyles = StyleSheet.create({
    container: { 
      backgroundColor: '#f0f4f8' // Nền app sáng màu xanh nhạt
    },
    text: { 
      color: '#333' // Chữ màu tối
    },
    modal: { 
      backgroundColor: 'white' // Nền Modal trắng
    },
    clearButton: { 
      backgroundColor: '#f87171' // Nền nút "Xóa" đỏ nhạt
    },
    closeButton: { 
      backgroundColor: '#60a5fa' // Nền nút "Đóng" xanh nhạt
    },
  });


  // Style riêng cho chế độ tối
  const darkStyles = StyleSheet.create({
    container: { 
      backgroundColor: '#1e293b' // Nền app tối màu xanh đậm
    },
    text: { 
      color: '#fff' // Chữ trắng
    },
    modal: { 
      backgroundColor: '#334155' // Nền Modal tối màu xanh xám
    },
    clearButton: { 
      backgroundColor: '#ef4444' // Nền nút "Xóa" đỏ đậm
    },
    closeButton: { 
      backgroundColor: '#3b82f6' // Nền nút "Đóng" xanh đậm
    },
  });

