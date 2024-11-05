"use client";

import { DisplayDataRow } from "@/components/DisplayData/DisplayData";
import { initData, User, useSignal } from "@telegram-apps/sdk-react";
import { useRouter } from "next/router";
import React, { useMemo } from "react";

function getUserRows(user: User): DisplayDataRow[] {
  return [
    { title: "id", value: user.id.toString() },
    { title: "username", value: user.username },
    { title: "photo_url", value: user.photoUrl },
    { title: "last_name", value: user.lastName },
    { title: "first_name", value: user.firstName },
    { title: "is_bot", value: user.isBot },
    { title: "is_premium", value: user.isPremium },
    { title: "language_code", value: user.languageCode },
    { title: "allows_to_write_to_pm", value: user.allowsWriteToPm },
    { title: "added_to_attachment_menu", value: user.addedToAttachmentMenu },
  ];
}

const TapblogPage = ({ params }: { params: { id: string } }) => {
  const initDataRaw = useSignal(initData.raw);
  const initDataState = useSignal(initData.state);

  const userRows = useMemo<DisplayDataRow[] | undefined>(() => {
    return initDataState && initDataState.user
      ? getUserRows(initDataState.user)
      : undefined;
  }, [initDataState]);

  console.log(userRows);
  return (
    <>
      <p>test {params.id}</p>
      <br />
      {userRows?.map((val: DisplayDataRow) => (
        <p>
          <b>{val.title}</b>: {val.value}
        </p>
      ))}
    </>
  );
};

export default TapblogPage;
