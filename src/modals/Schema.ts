import {schema } from "normalizr"


export const userSchema = new schema.Entity("user");


export const groupSchema = new schema.Entity("groups", {
    creator : userSchema,
    participants : [userSchema],
    invitedMembers : [userSchema]
});