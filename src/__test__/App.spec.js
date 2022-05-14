import { mount } from "@vue/test-utils";
import App from "../App.vue";


// The component to test

test("displays message", () => {
  const wrapper = mount(App);

  // Assert the rendered text of the component
//   const profilePara = wrapper.get('[testId="profile-text"]');
//   expect(profilePara.text()).toBe("H");
});
