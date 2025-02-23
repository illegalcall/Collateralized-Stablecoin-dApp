import React, { useState } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import CollateralMintUI from "@/components/stablecoin/deposit";
import RedeemBurnUI from "@/components/stablecoin/withdraw";
import { BackgroundGradient } from "../ui/background-gradient";

// deposit/withdraw widget
const DepositWithdrawUI = () => {
  const [mode, setMode] = useState("deposit");

  return (
    <BackgroundGradient className="max-w-md w-[500px] rounded-[22px] bg-white  dark:bg-zinc-900 sm:p-10">
      <Card className="w-full">
        <CardHeader>
          <CardTitle>Deposit and Withdraw</CardTitle>
        </CardHeader>
        <CardContent>
          <Tabs value={mode} onValueChange={setMode} className="w-full">
            <TabsList className="grid w-full grid-cols-2">
              <TabsTrigger value="deposit">Deposit</TabsTrigger>
              <TabsTrigger value="withdraw">Withdraw</TabsTrigger>
            </TabsList>
            <TabsContent value="deposit">
              <CollateralMintUI />
            </TabsContent>
            <TabsContent value="withdraw">
              <RedeemBurnUI />
            </TabsContent>
          </Tabs>
        </CardContent>
      </Card>
    </BackgroundGradient>
  );
};

export default DepositWithdrawUI;
