import React, { createContext, useContext, useMemo, useState } from 'react';

import { BOTTOM_SHEETS } from '@/constants/NavigationConstants';
import { bottomSheetRegistry } from '@/navigation/BottomSheetRegistry';

type BottomSheetContextType = {
  openBottomSheet: (name: BOTTOM_SHEETS, params?: object) => void;
  closeBottomSheet: () => void;
  closeAllBottomSheets: () => void;
  activeBottomSheets: { name: BOTTOM_SHEETS; params: object | null }[];
};

const BottomSheetContext = createContext<BottomSheetContextType | undefined>(
  undefined,
);

export const useBottomSheetContext = () => {
  const context = useContext(BottomSheetContext);
  if (!context) {
    throw new Error(
      'useBottomSheetContext must be used within a BottomSheetProvider',
    );
  }
  return context;
};

export const BottomSheetProvider: React.FC<{ children: React.ReactNode }> = ({
  children,
}) => {
  const [activeBottomSheets, setActiveBottomSheets] = useState<
    { name: BOTTOM_SHEETS; params: object | null }[]
  >([]);

  const openBottomSheet = (name: BOTTOM_SHEETS, params?: object) => {
    setActiveBottomSheets((prevSheets) => [
      ...prevSheets,
      { name, params: params || null },
    ]);
  };

  const closeBottomSheet = () => {
    setActiveBottomSheets((prevSheets) => prevSheets.slice(0, -1));
  };
  const closeAllBottomSheets = () => {
    setActiveBottomSheets([]);
  };

  return (
    <BottomSheetContext.Provider
      value={useMemo(
        () => ({
          openBottomSheet,
          closeBottomSheet,
          closeAllBottomSheets,
          activeBottomSheets,
        }),
        [
          openBottomSheet,
          closeBottomSheet,
          closeAllBottomSheets,
          activeBottomSheets,
        ],
      )}>
      {children}
      {activeBottomSheets.map((sheet, index) => {
        const Component = bottomSheetRegistry[sheet.name];
        if (!Component) return null;

        return <Component key={index} {...sheet.params} />;
      })}
    </BottomSheetContext.Provider>
  );
};
