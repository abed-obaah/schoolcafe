import React, { useState } from 'react';
import { View, Text, StyleSheet, FlatList,Modal, TouchableOpacity, } from 'react-native';
import { FontAwesome, FontAwesome5, Ionicons, MaterialCommunityIcons, MaterialIcons } from '@expo/vector-icons';
import COLORS from '@/constants/Colorsb';
import GradientButtons  from "@/constants/Button"
import BottomSlideModal from '@/components/ToolsModal';





export default function ToolsScreen() {
  const [modalVisible, setModalVisible] = useState(false);
  const [modalVisibleRating, setModalVisibleRating] = useState(false);
  const [selectedItem, setSelectedItem] = useState(null);
  const [bottomSlideModalData, setBottomSlideModalData] = useState(null);

  const handleGradientButtonPress = () => {
    if (selectedItem) {
      console.log('Setting bottomSlideModalData:', selectedItem.name);
      setBottomSlideModalData(selectedItem.name);
      setModalVisibleRating(false); // Optionally close the current modal
      setModalVisible(true); // Open the BottomSlideModal
    }
  };
  
  
  const recentlyUsed = [
    { id: 1, name: 'Relocation letter tool', icon: 'map-marker-alt', library: 'FontAwesome5' },
    { id: 2, name: 'Reposting letter tool', icon: 'file-alt', library: 'FontAwesome5' },
    { id: 3, name: 'Topic Recommender', icon: 'book', library: 'FontAwesome5' },
    { id: 4, name: 'CGPA Calculator', icon: 'calculator', library: 'FontAwesome5' },
  ];

  const universityTools = [
    { id: 1, name: 'Topic Recommender', icon: 'book', library: 'FontAwesome5' },
    { id: 2, name: 'CGPA Calculator', icon: 'calculator', library: 'FontAwesome5' },
    { id: 3, name: 'Aggregate Calculator', icon: 'chart-line', library: 'FontAwesome5' },
    { id: 4, name: 'Search for Courses', icon: 'search', library: 'FontAwesome5' },
    { id: 5, name: 'Check Admission Eligibility', icon: 'check-circle', library: 'FontAwesome5' },
    { id: 6, name: 'Check Course Eligibility', icon: 'check-square', library: 'FontAwesome5' },
    { id: 7, name: 'Check Subject Combination', icon: 'clipboard-check', library: 'FontAwesome5' },
    { id: 8, name: 'Course Recommender', icon: 'lightbulb', library: 'FontAwesome5' },
  ];

  const nyscTools = [
    { id: 1, name: 'PPA Recommender', icon: 'checkbox-multiple-marked-circle-outline', library: 'MaterialCommunityIcons' },
    { id: 2, name: 'Relocation letter tool', icon: 'map-marker-alt', library: 'FontAwesome5' },
    { id: 3, name: 'Reposting letter tool', icon: 'file-copy', library: 'MaterialIcons' },
    { id: 4, name: 'NYSC Secretariat Locator', icon: 'building', library: 'FontAwesome5' },
    { id: 5, name: 'NYSC Camp Locator', icon: 'campground', library: 'FontAwesome5' },
    { id: 6, name: 'LGA Review', icon: 'edit', library: 'FontAwesome5' },
  ];

  const renderIcon = (icon, library) => {
    switch (library) {
      case 'FontAwesome5':
        return <FontAwesome5 name={icon} size={24} color="#2C2C2C" />;
      case 'Ionicons':
        return <Ionicons name={icon} size={24} color="#2C2C2C" />;
      case 'MaterialIcons':
        return <MaterialIcons name={icon} size={24} color="#2C2C2C" />;
      case 'MaterialCommunityIcons':
        return <MaterialCommunityIcons name={icon} size={24} color="#2C2C2C" />;
      default:
        return null;
    }
  };

  const handleLastItemClick = (item) => {
    setSelectedItem(item);
    setModalVisibleRating(true);
  };


  const renderToolItem = ({ item }) => (
    <TouchableOpacity
      style={styles.toolItem}
      onPress={() => handleLastItemClick(item)}
    >
      {renderIcon(item.icon, item.library)}
      <Text style={styles.toolText}>{item.name}</Text>
    </TouchableOpacity>
  );

  return (
    <View style={styles.container}>
      {/* Header */}
      <View style={styles.header}>
        <FontAwesome5 name="arrow-left" size={24} color="black" />
        <Text style={styles.headerTitle}>Schoolcafe's tools</Text>
      </View>

      {/* Recently Used Tools */}
      <View style={styles.sectionContainer}>
        <Text style={styles.sectionTitle}>Recently used</Text>
        <FlatList
          data={recentlyUsed}
          renderItem={renderToolItem}
          keyExtractor={(item) => item.id.toString()}
          numColumns={4}
          key={`recentlyUsed-${4}`}  // Unique key to force re-render
          contentContainerStyle={styles.toolsContainer}
        />
      </View>

      {/* University Tools */}
      <View style={styles.sectionContainer}>
        <Text style={styles.sectionTitle}>University tools</Text>
        <FlatList
          data={universityTools}
          renderItem={renderToolItem}
          keyExtractor={(item) => item.id.toString()}
          numColumns={4}
          key={`universityTools-${4}`}  // Unique key to force re-render
          contentContainerStyle={styles.toolsContainer}
        />
      </View>

      {/* NYSC Tools */}
      <View style={styles.sectionContainer}>
        <Text style={styles.sectionTitle}>NYSC tools</Text>
        <FlatList
          data={nyscTools}
          renderItem={renderToolItem}
          keyExtractor={(item) => item.id.toString()}
          numColumns={3}
          key={`nyscTools-${3}`}  // Unique key to force re-render
          contentContainerStyle={styles.toolsContainer}
        />
      </View>

      <Modal
        animationType="slide"
        transparent={true}
        visible={modalVisibleRating}
        onRequestClose={() => setModalVisibleRating(false)}
      >
        <View style={styles.modalOverlay}>
          <View style={[styles.modalContent,{alignContent:'center'}]}>
          {selectedItem && (
              <View style={styles.modalItem}>
                <Text style={styles.modalItemName}>{selectedItem.name}</Text>
              </View>
            )}
                 <GradientButtons
                       label="                                  Continue     "
                       onPress={handleGradientButtonPress}
                        showIcon={false}
                        style={{ width: '100%' }}
                  />
            <TouchableOpacity style={styles.modalButton} onPress={() => setModalVisibleRating(false)}>
              <Text style={styles.modalButtonText}>Close</Text>
            </TouchableOpacity>          
          </View>
        </View>
      </Modal>
      
      <BottomSlideModal data={bottomSlideModalData} visible={modalVisible} onClose={() => setModalVisible(false)} />

    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white',
    paddingHorizontal: 16,
    paddingTop: 32, // Adjust this value to add more space at the top
  },
  header: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingVertical: 16,
    borderBottomWidth: 1,
    borderBottomColor: '#E0E0E0',
  },
  headerTitle: {
    marginLeft: 16,
    fontSize: 18,
    fontWeight: 'bold',
  },
  sectionContainer: {
    marginTop: 24,
    borderBottomWidth: 1,
    borderBottomColor: '#E0E0E0',
    paddingBottom: 16,
  },
  sectionTitle: {
    marginBottom: 8,
    fontSize: 16,
    fontWeight: 'bold',
  },
  toolsContainer: {
    justifyContent: 'space-between',
  },
  toolItem: {
    flex: 1,
    alignItems: 'center',
    marginBottom: 16,
    marginHorizontal: 8,
  },
  toolText: {
    marginTop: 8,
    textAlign: 'center',
    fontSize: 12,
    color: '#818D96',
  },


  modalOverlay: {
    flex: 1,
    backgroundColor: 'rgba(0, 0, 0, 0.5)',
    justifyContent: 'flex-end',
  },
  modalContent: {
    backgroundColor: 'white',
    borderTopLeftRadius: 20,
    borderTopRightRadius: 20,
    padding: 25,
    // alignItems: 'center',
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: -2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 4,
    elevation: 5,
  },
  modalText: {
    marginBottom: 20,
    textAlign: 'center',
  },
  modalButton: {
    // backgroundColor: COLORS.Gray_200,
    width: '100%',
    alignItems: 'center',
    paddingVertical: 14,
    paddingHorizontal: 147,
    borderRadius: 8,
    marginTop:10
  },
  modalButtonText: {
    color: COLORS.Warning_100,
    width: '100%',
    textAlign: 'center',
  },
  modalItem: {
    alignItems: 'center',
    marginBottom: 20,
  },
  modalItemName: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#2C2C2C',
  },

});
