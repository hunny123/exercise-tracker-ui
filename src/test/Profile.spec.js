import { mount } from "@vue/test-utils";
import Profile from "../components/Profile.vue";
import { test, expect } from "vitest";

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
