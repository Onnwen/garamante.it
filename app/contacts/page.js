"use client"

import MediaQuery from "react-responsive"
import ContactsDesktop from "@/app/contacts/contacts-desktop"
import ContactsMobile from "@/app/contacts/contacts-mobile"

export default function Index() {
    return (
        <>
            <MediaQuery minWidth={1224}>
                <ContactsDesktop />
            </MediaQuery>
            <MediaQuery maxWidth={1224}>
                <ContactsMobile />
            </MediaQuery>
        </>
    )
}
