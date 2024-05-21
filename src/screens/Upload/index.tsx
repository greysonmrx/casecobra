"use client";

import React from "react";
import { useRouter } from "next/navigation";
import Dropzone, { type FileRejection } from "react-dropzone";

import { Icon } from "@/components/Icon";
import { Progress } from "@/components/Progress";

import { useToast } from "@/hooks/useToast";

import { useUploadThing } from "@/lib/uploadthing";

import { cn } from "@/utils/cn";

const Upload: React.FC = () => {
  const router = useRouter();
  const { toast } = useToast();

  const [isPending, startTransition] = React.useTransition();

  const [isDragOver, setIsDragOver] = React.useState(false);
  const [uploadProgress, setUploadProgress] = React.useState(0);

  const { startUpload, isUploading } = useUploadThing("imageUploader", {
    onClientUploadComplete: ([data]) => {
      const configId = data.serverData.configId;

      startTransition(() => {
        router.push(`/configure/design?id=${configId}`);
      });
    },
    onUploadProgress(progress) {
      setUploadProgress(progress);
    },
  });

  const onDropRejected = React.useCallback(
    (rejectedFiles: FileRejection[]) => {
      const [file] = rejectedFiles;

      setIsDragOver(false);

      toast({
        title: `${file.file.type} type is not supported.`,
        description: "Please choose a PNG, JPG, or JPEG image instead.",
        variant: "destructive",
      });
    },
    [toast]
  );

  const onDropAccepted = React.useCallback(
    (acceptedFiles: File[]) => {
      startUpload(acceptedFiles, { configId: undefined });

      setIsDragOver(false);
    },
    [startUpload]
  );

  return (
    <div
      className={cn(
        "relative h-full flex-1 my-16 w-full rounded-xl bg-gray-900/5 p-2 ring-1 ring-inset ring-gray-900/10 border-0 border-dashed border-primary lg:rounded-2xl flex justify-center flex-col items-center",
        {
          "border-4 ring-0 bg-primary/15": isDragOver,
        }
      )}
    >
      <div className="relative flex flex-1 flex-col items-center justify-center w-full">
        <Dropzone
          onDropRejected={onDropRejected}
          onDropAccepted={onDropAccepted}
          accept={{
            "image/png": [".png"],
            "image/jpeg": [".jpeg"],
            "image/jpg": [".jpg"],
          }}
          disabled={isUploading || isPending}
          onDragEnter={() => setIsDragOver(true)}
          onDragLeave={() => setIsDragOver(false)}
        >
          {({ getRootProps, getInputProps }) => (
            <div
              {...getRootProps()}
              className={cn(
                "h-full w-full flex-1 flex flex-col items-center justify-center"
              )}
            >
              <input {...getInputProps()} />
              {isDragOver ? (
                <Icon
                  name="mouse-pointer-square-dashed"
                  className="h-6 w-6 text-zinc-500 mb-2"
                />
              ) : isUploading || isPending ? (
                <Icon
                  name="loader-2"
                  className="animate-spin h-6 w-6 text-zinc-500 mb-2"
                />
              ) : (
                <Icon name="image" className="h-6 w-6 text-zinc-500 mb-2" />
              )}
              <div className="flex flex-col justify-center mb-2 text-sm text-zinc-700">
                {isUploading ? (
                  <div className="flex flex-col items-center">
                    <p>Uploading...</p>
                    <Progress
                      value={uploadProgress}
                      className="mt-2 w-40 h-2 bg-gray-300"
                    />
                  </div>
                ) : isPending ? (
                  <div className="flex flex-col items-center">
                    <p>Redirecting, please wait...</p>
                  </div>
                ) : isDragOver ? (
                  <p>
                    <span className="font-semibold">Drop file</span> to upload
                  </p>
                ) : (
                  <p>
                    <span className="font-semibold">Click to upload</span> or
                    drag and drop
                  </p>
                )}
              </div>
              {isPending ? null : (
                <p className="text-xs text-zinc-500">PNG, JPG, JPEG</p>
              )}
            </div>
          )}
        </Dropzone>
      </div>
    </div>
  );
};

export { Upload };
