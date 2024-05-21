import * as React from "react";

import { cn } from "@/utils/cn";

const TableRoot: React.ForwardRefRenderFunction<
  HTMLTableElement,
  React.ComponentProps<"table">
> = ({ className, ...props }, ref) => (
  <div className="relative w-full overflow-auto">
    <table
      ref={ref}
      className={cn("w-full caption-bottom text-sm", className)}
      {...props}
    />
  </div>
);
TableRoot.displayName = "TableRoot";

const TableHeader: React.ForwardRefRenderFunction<
  HTMLTableSectionElement,
  React.ComponentProps<"thead">
> = ({ className, ...props }, ref) => (
  <thead ref={ref} className={cn("[&_tr]:border-b", className)} {...props} />
);
TableHeader.displayName = "TableHeader";

const TableBody: React.ForwardRefRenderFunction<
  HTMLTableSectionElement,
  React.ComponentProps<"tbody">
> = ({ className, ...props }, ref) => (
  <tbody
    ref={ref}
    className={cn("[&_tr:last-child]:border-0", className)}
    {...props}
  />
);
TableBody.displayName = "TableBody";

const TableFooter: React.ForwardRefRenderFunction<
  HTMLTableSectionElement,
  React.ComponentProps<"tfoot">
> = ({ className, ...props }, ref) => (
  <tfoot
    ref={ref}
    className={cn(
      "border-t bg-muted/50 font-medium [&>tr]:last:border-b-0",
      className
    )}
    {...props}
  />
);
TableFooter.displayName = "TableFooter";

const TableRow: React.ForwardRefRenderFunction<
  HTMLTableRowElement,
  React.ComponentProps<"tr">
> = ({ className, ...props }, ref) => (
  <tr
    ref={ref}
    className={cn(
      "border-b transition-colors hover:bg-muted/50 data-[state=selected]:bg-muted",
      className
    )}
    {...props}
  />
);
TableRow.displayName = "TableRow";

const TableHead: React.ForwardRefRenderFunction<
  HTMLTableCellElement,
  React.ComponentProps<"th">
> = ({ className, ...props }, ref) => (
  <th
    ref={ref}
    className={cn(
      "h-10 px-2 text-left align-middle font-medium text-muted-foreground [&:has([role=checkbox])]:pr-0 [&>[role=checkbox]]:translate-y-[2px]",
      className
    )}
    {...props}
  />
);
TableHead.displayName = "TableHead";

const TableCell: React.ForwardRefRenderFunction<
  HTMLTableCellElement,
  React.ComponentProps<"td">
> = ({ className, ...props }, ref) => (
  <td
    ref={ref}
    className={cn(
      "p-2 align-middle [&:has([role=checkbox])]:pr-0 [&>[role=checkbox]]:translate-y-[2px]",
      className
    )}
    {...props}
  />
);
TableCell.displayName = "TableCell";

const TableCaption: React.ForwardRefRenderFunction<
  HTMLTableCaptionElement,
  React.ComponentProps<"caption">
> = ({ className, ...props }, ref) => (
  <caption
    ref={ref}
    className={cn("mt-4 text-sm text-muted-foreground", className)}
    {...props}
  />
);
TableCaption.displayName = "TableCaption";

const ForwardedTableRootRef = React.forwardRef(TableRoot);
const ForwardedTableHeaderRef = React.forwardRef(TableHeader);
const ForwardedTableBodyRef = React.forwardRef(TableBody);
const ForwardedTableFooterRef = React.forwardRef(TableFooter);
const ForwardedTableHeadRef = React.forwardRef(TableHead);
const ForwardedTableRowRef = React.forwardRef(TableRow);
const ForwardedTableCellRef = React.forwardRef(TableCell);
const ForwardedTableCaptionRef = React.forwardRef(TableCaption);

export const Table = {
  Root: ForwardedTableRootRef,
  Header: ForwardedTableHeaderRef,
  Body: ForwardedTableBodyRef,
  Footer: ForwardedTableFooterRef,
  Head: ForwardedTableHeadRef,
  Row: ForwardedTableRowRef,
  Cell: ForwardedTableCellRef,
  Caption: ForwardedTableCaptionRef,
};
