"use client";

import { useState } from "react";
import { Button } from "@repo/ui/button";

export function Counter() {
  const [count, setCount] = useState(0);

  return <Button onPress={() => setCount((count) => count + 1)}>Count is {count}</Button>;
}
