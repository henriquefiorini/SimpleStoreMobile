import styled from 'styled-components/native';

export const Container = styled.SafeAreaView`
  flex-direction: column;
  flex-shrink: 0;
  background: white;
  border-bottom-width: 1;
  border-bottom-color: #eee;
`;

export const Row = styled.View`
  flex-direction: row;
  flex-wrap: nowrap;
  align-items: center;
  justify-content: space-between;
  height: 56px;
  padding-right: 16px;
  padding-left: 16px;
`;

export const Section = styled.View`
  flex-shrink: 0;
  align-items: center;
`;

export const ActionItem = styled.TouchableOpacity`
  flex-shrink: 0;
  align-items: center;
  justify-content: center;
  height: 24px;
  width: 24px;
`;

export const Logo = styled.Text`
  height: 24px;
  font-size: 20px;
  font-weight: bold;
  font-style: italic;
  letter-spacing: -0.8px;
`;
