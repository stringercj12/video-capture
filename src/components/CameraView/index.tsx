import React from "react";
import { Camera } from "expo-camera";
import { Text, TouchableOpacity, View } from "react-native";
import { styles } from "./styles";

export interface CameraViewProps {
  cameraRef: React.RefObject<Camera>;
  isRecording: boolean;
  onRecord?: () => void;
  onStopRecording?: () => void;
}

export function CameraView({ cameraRef, isRecording, onRecord, onStopRecording }: CameraViewProps) {
  return (
    <Camera style={styles.container} ref={cameraRef}>
      <View style={styles.containerButton}>
        <TouchableOpacity style={styles.buttonRecord}
          onPress={isRecording ? onStopRecording : onRecord}>
          <Text style={styles.buttonText}>
            {isRecording ? 'Stop Recording' : 'Start Record'}
          </Text>
        </TouchableOpacity>
      </View>
    </Camera>
  )
}