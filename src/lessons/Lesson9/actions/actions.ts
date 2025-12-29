'use server';

import type { State } from '../Lesson9';

export const action = async (prevState: State, formData: FormData) => {
  console.log(`Button Value: ${formData.get('button')}`);
  await new Promise((resolve) => setTimeout(resolve, 2000));
  return {
    count: (prevState?.count || 0) + 1,
  };
};
