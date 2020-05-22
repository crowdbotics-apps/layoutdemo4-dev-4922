import React from "react"
import { View } from "react-native"
import {
  withStyles,
  Text,
  Button,
  CheckBox,
  Radio,
  Toggle,
  Icon,
  Input
} from "react-native-ui-kitten"

export class _Blank extends React.Component {
  static navigationOptions = {
    title: "Blank".toUpperCase()
  }

  render = () => (
    <View
      style={{
        overflow: "visible",
        flexDirection: "column",
        flexWrap: "wrap",
        justifyContent: "flex-start",
        alignItems: "stretch",
        alignContent: "stretch",
        borderStyle: "solid",
        backgroundSize: "auto"
      }}
    >
      <Button
        style={{
          overflow: "visible",
          borderStyle: "solid",
          backgroundColor: "#3366FF"
        }}
      >
        Button
      </Button>
      <Text style={{ overflow: "visible", borderStyle: "solid" }}>Text</Text>
      <Input
        placeholder="Text input placeholder"
        readonly={false}
        value=""
        style={{ overflow: "visible", borderStyle: "solid" }}
      />
      <CheckBox
        label="Some Checkbox"
        disabled={false}
        checked={true}
        style={{ overflow: "visible", borderStyle: "solid" }}
      />
      <Radio
        label="Radio button"
        disabled={false}
        checked={true}
        style={{ overflow: "visible", borderStyle: "solid" }}
      />
    </View>
  )
}

export default Blank = withStyles(_Blank, theme => ({
  container: {
    backgroundColor: theme["color-basic-100"]
  }
}))
