<template>
  <div class="calculator">
    <DisplayResult :value="displayValue" />
    <ButtonCalc label="AC" triple @onClick="clearMemory" />
    <ButtonCalc label="/" operation @onClick="setOperation" />
    <ButtonCalc label="7" @onClick="addDigit" />
    <ButtonCalc label="8" @onClick="addDigit" />
    <ButtonCalc label="9" @onClick="addDigit" />
    <ButtonCalc label="*" operation @onClick="setOperation" />
    <ButtonCalc label="4" @onClick="addDigit" />
    <ButtonCalc label="5" @onClick="addDigit" />
    <ButtonCalc label="6" @onClick="addDigit" />
    <ButtonCalc label="-" operation @onClick="setOperation" />
    <ButtonCalc label="1" @onClick="addDigit" />
    <ButtonCalc label="2" @onClick="addDigit" />
    <ButtonCalc label="3" @onClick="addDigit" />
    <ButtonCalc label="+" operation @onClick="setOperation" />
    <ButtonCalc label="0" double @onClick="addDigit" />
    <ButtonCalc label="." @onClick="addDigit" />
    <ButtonCalc label="=" operation @onClick="setOperation" />
  </div>
</template>

<script>
import ButtonCalc from "../components/ButtonCalc";
import DisplayResult from "../components/DisplayResult";

export default {
  data: function () {
    return {
      displayValue: "0", //valor string
      clearDisplay: false,
      operation: null,
      values: [0, 0], //valores float
      current: 0,
    };
  },
  components: { ButtonCalc, DisplayResult },
  methods: {
    clearMemory() {
      Object.assign(this.$data, this.$options.data());
    },
    setOperation(operation) {
      if (this.current === 0) {
        this.operation = operation;
        this.current = 1;
        this.clearDisplay = true;
      } else {
        const equals = operation === "=";
        const currentOperation = this.operation;

        try {
          this.values[0] = eval(
            `${this.values[0]} ${currentOperation} ${this.values[1]}`
          );
          if (isNaN(this.values[0]) || !isFinite(this.values[0])) {
            this.clearMemory();
            return;
          }
        } catch (e) {
          this.$emit("onError", e);
        }

        this.values[1] = 0;

        this.displayValue = this.values[0];
        this.operation = equals ? null : operation;
        this.current = equals ? 0 : 1;
        this.clearDisplay = !equals;
      }
    },
    addDigit(n) {
      if (n === "." && this.displayValue.includes(".")) {
        return;
      }
      const clearDisplay = this.displayValue === "0" || this.clearDisplay;
      const currentValue = clearDisplay ? "" : this.displayValue;
      const _DISPLAYVALUE = currentValue + n;
      this.displayValue = _DISPLAYVALUE;
      this.clearDisplay = false;

      // Alternativa 1
      this.values[this.current] = _DISPLAYVALUE;

      // Alternativa 2
      // if (n !== ".") {
      //     const i = this.current
      //     const newValue = parseFloat(displayValue)
      //     this.values[i] = newValue
      // }
    },
  },
};
</script>

<style>
.calculator {
  height: 320px;
  width: 235px;
  border-radius: 5px;
  overflow: hidden;

  display: grid;
  grid-template-columns: repeat(4, 25%);
  grid-template-rows: 1fr 48px 48px 48px 48px 48px;
}
</style>