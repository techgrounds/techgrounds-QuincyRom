import * as cdk from 'aws-cdk-lib';
import * as ec2 from 'aws-cdk-lib/aws-ec2';
import { Construct} from 'constructs'

export class AdminServerStack extends cdk.Stack {
  constructor(scope: Construct, id: string, vpc: ec2.Vpc, privateSubnetIds: string[], props?: cdk.StackProps) {
    super(scope, id, props);

    const securityGroup = new ec2.SecurityGroup(this, 'AdminServerSecurityGroup', {
      vpc,
      allowAllOutbound: true,
    });

    const instance = new ec2.Instance(this, 'AdminServerInstance', {
      vpc,
      instanceType: new ec2.InstanceType('t2.micro'),
      machineImage: ec2.MachineImage.latestWindows(ec2.WindowsVersion.WINDOWS_SERVER_2019_ENGLISH_FULL_BASE), // Specify the desired Windows Server version
      securityGroup,
      vpcSubnets: { subnets: privateSubnetIds.map(subnetId => ec2.Subnet.fromSubnetId(this, `PrivateSubnet${subnetId}`, subnetId)) },
      //keyName: 'your-key-pair-name', 
    });

    // Output the instance's private IP address
    new cdk.CfnOutput(this, 'AdminServerPrivateIp', {
      value: instance.instancePrivateIp,
    });
  }
}
