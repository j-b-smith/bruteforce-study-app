// components/ModeSelectionModal.tsx

import React, { useState } from "react";
import {
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalBody,
  ModalFooter,
  Button,
  RadioGroup,
  Radio,
  Stack,
  Input,
} from "@chakra-ui/react";

interface ModeSelectionModalProps {
  isOpen: boolean;
  onClose: () => void;
  onModeSelect: (mode: "prep" | "study", timer?: number) => void;
}

const ModeSelectionModal: React.FC<ModeSelectionModalProps> = ({ isOpen, onClose, onModeSelect }) => {
  const [mode, setMode] = useState<"prep" | "study">("study");
  const [timer, setTimer] = useState<number>(0); // Timer for Test Prep Mode

  const handleModeSelect = () => {
    onModeSelect(mode, timer > 0 ? timer : undefined);
    onClose();
  };

  return (
    <Modal isOpen={isOpen} onClose={onClose}>
      <ModalOverlay />
      <ModalContent>
        <ModalHeader>Select Mode</ModalHeader>
        <ModalBody>
          <RadioGroup onChange={(value) => setMode(value as "prep" | "study")} value={mode}>
            <Stack direction="column" spacing={4}>
              <Radio value="study">Study Mode</Radio>
              <Radio value="prep">Test Prep Mode</Radio>
            </Stack>
          </RadioGroup>
          {mode === "prep" && (
            <Input
              mt={4}
              placeholder="Set timer in minutes"
              type="number"
              value={timer}
              onChange={(e) => setTimer(parseInt(e.target.value, 10))}
            />
          )}
        </ModalBody>
        <ModalFooter>
          <Button colorScheme="blue" onClick={handleModeSelect}>
            Start Quiz
          </Button>
        </ModalFooter>
      </ModalContent>
    </Modal>
  );
};

export default ModeSelectionModal;
