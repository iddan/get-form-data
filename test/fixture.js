export default `<form id="testForm" autocomplete="off">
  <!-- Inputs without a name or id should be ignored -->
  <input value="noNameOrId">

  <!-- Individual inputs -->
  <input type="hidden" name="hiddenInput" value="hiddenInput">
  <input type="hidden" name="hiddenInputDisabled" value="hiddenInputDisabled" disabled>

  <input type="text" name="textInput" value="textInput">
  <input type="text" name="textInputDisabled" value="textInputDisabled" disabled>

  <input type="checkbox" name="uncheckedCheckbox" value="uncheckedCheckbox">
  <input type="checkbox" name="checkedCheckbox" value="checkedCheckbox" checked>
  <input type="checkbox" name="noValueUncheckedCheckbox">
  <input type="checkbox" name="noValueCheckedCheckbox" checked>

  <textarea name="textarea">textarea</textarea>
  <textarea name="textareaDisabled" disabled>textareaDisabled</textarea>

  <!-- Multiple checkboxes -->
  <input type="checkbox" name="multipleCheckbox" value="1">
  <input type="checkbox" name="multipleCheckbox" value="2">
  <input type="checkbox" name="multipleCheckbox" value="3">

  <input type="checkbox" name="checkOneMultipleCheckbox" value="1">
  <input type="checkbox" name="checkOneMultipleCheckbox" value="2">
  <input type="checkbox" name="checkOneMultipleCheckbox" value="3" checked>

  <input type="checkbox" name="checkTwoMultipleCheckbox" value="1" checked>
  <input type="checkbox" name="checkTwoMultipleCheckbox" value="2">
  <input type="checkbox" name="checkTwoMultipleCheckbox" value="3" checked>

  <input type="checkbox" disabled name="disabledMultipleCheckbox" value="1" checked>
  <input type="checkbox" disabled name="disabledMultipleCheckbox" value="2">
  <input type="checkbox" disabled name="disabledMultipleCheckbox" value="3" checked>

  <input type="checkbox" disabled name="partiallyDisabledMultipleCheckbox" value="1" checked>
  <input type="checkbox" name="partiallyDisabledMultipleCheckbox" value="2">
  <input type="checkbox" name="partiallyDisabledMultipleCheckbox" value="3" checked>

  <!-- Multiple radios -->
  <input type="radio" name="uncheckedRadio" value="1">
  <input type="radio" name="uncheckedRadio" value="2">

  <input type="radio" name="checkedRadio" value="1">
  <input type="radio" name="checkedRadio" value="2" checked>

  <input type="radio" name="radioDisabled" disabled value="1">
  <input type="radio" name="radioDisabled" disabled value="2" checked>

  <!-- Selects -->
  <select name="unselectedSelect">
    <option value=""></option>
    <option value="1">One</option>
    <option value="2">Two</option>
    <option value="3">Three</option>
  </select>

  <select name="selectedSelect">
    <option value=""></option>
    <option value="1">One</option>
    <option value="2" selected>Two</option>
    <option value="3">Three</option>
  </select>

  <select name="selectedDisabled" disabled>
    <option value=""></option>
    <option value="1">One</option>
    <option value="2" selected>Two</option>
    <option value="3">Three</option>
  </select>

  <!-- Multiple selects -->
  <select name="unselectedSelectMultiple" multiple>
    <option value="1">One</option>
    <option value="2">Two</option>
    <option value="3">Three</option>
  </select>

  <select name="selectOneSelectMultiple" multiple>
    <option value="1">One</option>
    <option value="2">Two</option>
    <option value="3" selected>Three</option>
  </select>

  <select name="selectTwoSelectMultiple" multiple>
    <option value="1" selected>One</option>
    <option value="2">Two</option>
    <option value="3" selected>Three</option>
  </select>

  <select name="selectMultipleDisabled" multiple disabled>
    <option value="1" selected>One</option>
    <option value="2">Two</option>
    <option value="3" selected>Three</option>
  </select>

  <!-- Buttons (should not be included) -->
  <input type="submit" name="inputSubmit" value="Submit">
  <input type="button" name="inputButton" value="Button">
  <input type="reset" name="resetButton" value="Reset">
  <button type="submit" name="buttonSubmitt">Submit</button>
  <button type="button" name="buttonButton">Button</button>
</form>

<form id="trimForm">
  ...
  <label>Username:</label>
  <input type="text" name="username" value=" AzureDiamond">

  <label>Password:</label>
  <input type="password" name="password" value="hunter2 ">

  <label>Security message:</label>
  <textarea name="message"> Hello </textarea>

  <label>Terms of Service:</label>
  <p>I have read and agree to the <a href="/">Terms of Service</a>.</p>
  <label class="checkbox"><input type="checkbox" name="tos" value=" Y " checked> Yes</label>
  ...
</form>

<!-- README examples -->

<form id="productForm">
  ...
  <label>Product:</label>
  <select name="product">
    <option value="1" selected>T-shirt</option>
    <option value="2">Hat</option>
    <option value="3">Shoes</option>
  </select>

  <label>Quantity:</label>
  <input type="number" name="quantity" min="0" step="1" value="9">

  <label>Express shipping</label>
  <p>Do you want to use <a href="/shipping#express">Express Shipping</a>?</p>
  <div class="radios">
    <label><input type="radio" name="shipping" value="express" checked> Yes</label>
    <label><input type="radio" name="shipping" value="regular"> No</label>
  </div>

  <label>Terms of Service:</label>
  <p>I have read and agree to the <a href="/">Terms of Service</a>.</p>
  <label class="checkbox"><input type="checkbox" name="tos" value="Y" checked> Yes</label>
  ...
</form>

<form id="tshirtForm">
  ...
  <label>Sizes:</label>
  <div class="checkboxes">
    <label><input type="checkbox" name="sizes" value="S"> S</label>
    <label><input type="checkbox" name="sizes" value="M" checked> M</label>
    <label><input type="checkbox" name="sizes" value="L" checked> L</label>
  </div>
  ...
</form>

<form id="signupForm">
  ...
  <label>Username:</label>
  <input type="text" name="username" value="AzureDiamond  ">

  <label>Password:</label>
  <input type="password" name="password" value=" hunter2 ">
  ...
</form>`
