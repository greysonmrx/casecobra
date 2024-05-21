import React from "react";
import Image from "next/image";
import { LoginLink, RegisterLink } from "@kinde-oss/kinde-auth-nextjs";

import { Dialog } from "@/components/Dialog";
import { variants as buttonVariants } from "@/components/Button/variants";

interface LoginModalProps {
  isOpen: boolean;
  setIsOpen: React.Dispatch<React.SetStateAction<boolean>>;
}

const LoginModal: React.FC<LoginModalProps> = ({ isOpen, setIsOpen }) => {
  return (
    <Dialog.Root onOpenChange={setIsOpen} open={isOpen}>
      <Dialog.Content className="absolute z-[9999999]">
        <Dialog.Header>
          <div className="relative mx-auto w-24 h-24 mb-2">
            <Image
              src="/snake-1.png"
              alt="snake image"
              className="object-contain"
              fill
            />
          </div>
          <Dialog.Title className="text-3xl text-center font-bold tracking-tight text-gray-900">
            Log in to continue
          </Dialog.Title>
          <Dialog.Description className="text-base text-center py-2">
            <span className="font-medium text-zinc-900">
              Your configuration was saved!
            </span>{" "}
            Please login or create an account to complete your purchase.
          </Dialog.Description>
        </Dialog.Header>
        <div className="grid grid-cols-2 gap-6 divide-x divide-gray-200">
          <LoginLink className={buttonVariants({ variant: "outline" })}>
            Login
          </LoginLink>
          <RegisterLink className={buttonVariants({ variant: "default" })}>
            Sign up
          </RegisterLink>
        </div>
      </Dialog.Content>
    </Dialog.Root>
  );
};

export { LoginModal };
