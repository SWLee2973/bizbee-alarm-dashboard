import { createSafeActionClient } from "next-safe-action";
import { z } from "zod";

export const actionClient = createSafeActionClient({
  defineMetadataSchema: () =>
    z.object({
      actionName: z.string(),
    }),
  handleServerError: (e, utils) => {
    const { clientInput, metadata } = utils;

    console.log("e.constructor.name : ", e.constructor.name);
    console.log("clientInput : ", clientInput);
    console.log("metadata : ", metadata);

    return e.message;
  },
});
