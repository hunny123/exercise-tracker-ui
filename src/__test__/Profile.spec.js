import { mount } from "@vue/test-utils";
import Profile from "../components/Profile.vue";


// The component to test

test("displays message", () => {
  const wrapper = mount(Profile, {
    props: {
      name: "Hello world",
    },
  });

  // Assert the rendered text of the component
  const profilePara = wrapper.get('[testId="profile-text"]');
  expect(profilePara.text()).toBe("H");
});
